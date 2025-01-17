
import {SvgFactory} from "../../svgFactory";
import {GridOptionsWrapper} from "../../gridOptionsWrapper";
import {ExpressionService} from "../../expressionService";
import {EventService} from "../../eventService";
import {Constants} from "../../constants";
import {Utils as _} from "../../utils";
import {Events} from "../../events";
import {Autowired, Context} from "../../context/context";
import {Component} from "../../widgets/component";
import {ICellRenderer} from "./iCellRenderer";
import {RowNode} from "../../entities/rowNode";
import {GridApi} from "../../gridApi";
import {CellRendererService} from "../cellRendererService";
import {ValueFormatterService} from "../valueFormatterService";
import {CheckboxSelectionComponent} from "../checkboxSelectionComponent";
import {ColumnController} from "../../columnController/columnController";

var svgFactory = SvgFactory.getInstance();

export class GroupCellRenderer extends Component implements ICellRenderer {

    private static TEMPLATE =
        '<span>' +
         '<span class="ag-group-expanded"></span>' +
         '<span class="ag-group-contracted"></span>' +
         '<span class="ag-group-checkbox"></span>' +
         '<span class="ag-group-value"></span>' +
         '<span class="ag-group-child-count"></span>' +
        '</span>';

    @Autowired('gridOptionsWrapper') private gridOptionsWrapper: GridOptionsWrapper;
    @Autowired('expressionService') private expressionService: ExpressionService;
    @Autowired('eventService') private eventService: EventService;
    @Autowired('cellRendererService') private cellRendererService: CellRendererService;
    @Autowired('valueFormatterService') private valueFormatterService: ValueFormatterService;
    @Autowired('context') private context: Context;
    @Autowired('columnController') private columnController: ColumnController;

    private eExpanded: HTMLElement;
    private eContracted: HTMLElement;
    private eCheckbox: HTMLElement;
    private eValue: HTMLElement;
    private eChildCount: HTMLElement;

    private rowNode: RowNode;
    private rowIndex: number;
    private gridApi: GridApi;

    constructor() {
        super(GroupCellRenderer.TEMPLATE);
        this.eExpanded = this.queryForHtmlElement('.ag-group-expanded');
        this.eContracted = this.queryForHtmlElement('.ag-group-contracted');
        this.eCheckbox = this.queryForHtmlElement('.ag-group-checkbox');
        this.eValue = this.queryForHtmlElement('.ag-group-value');
        this.eChildCount = this.queryForHtmlElement('.ag-group-child-count');
    }

    public init(params: any): void {
        this.rowNode = params.node;
        this.rowIndex = params.rowIndex;
        this.gridApi = params.api;

        this.addExpandAndContract(params.eGridCell);
        this.addCheckboxIfNeeded(params);
        this.addValueElement(params);
        this.addPadding(params);
    }

    private addPadding(params: any): void {
        // only do this if an indent - as this overwrites the padding that
        // the theme set, which will make things look 'not aligned' for the
        // first group level.
        var node = this.rowNode;
        var suppressPadding = params.suppressPadding;
        if (!suppressPadding && (node.footer || node.level > 0)) {
            var paddingFactor: any;
            if (params.colDef && params.padding >= 0) {
                paddingFactor = params.padding;
            } else {
                paddingFactor = 10;
            }
            var paddingPx = node.level * paddingFactor;
            var reducedLeafNode = this.columnController.isPivotMode() && this.rowNode.leafGroup;
            if (node.footer) {
                paddingPx += 15;
            } else if (!node.group || reducedLeafNode) {
                paddingPx += 10;
            }
            this.getGui().style.paddingLeft = paddingPx + 'px';
        }
    }

    private addValueElement(params: any): void {
        if (params.innerRenderer) {
            this.createFromInnerRenderer(params);
        } else if (this.rowNode.footer) {
            this.createFooterCell(params);
        } else if (this.rowNode.group) {
            this.createGroupCell(params);
            this.addChildCount(params);
        } else {
            this.createLeafCell(params);
        }
    }

    private createFromInnerRenderer(params: any): void {
        this.cellRendererService.useCellRenderer(params.innerRenderer, this.eValue, params);
    }

    private createFooterCell(params: any): void {
        var footerValue: string;
        var groupName = this.getGroupName(params);
        if (params.footerValueGetter) {
            var footerValueGetter = params.footerValueGetter;
            // params is same as we were given, except we set the value as the item to display
            var paramsClone: any = _.cloneObject(params);
            paramsClone.value = groupName;
            if (typeof footerValueGetter === 'function') {
                footerValue = footerValueGetter(paramsClone);
            } else if (typeof footerValueGetter === 'string') {
                footerValue = this.expressionService.evaluate(footerValueGetter, paramsClone);
            } else {
                console.warn('ag-Grid: footerValueGetter should be either a function or a string (expression)');
            }
        } else {
            footerValue = 'Total ' + groupName;
        }

        this.eValue.innerHTML = footerValue;
    }

    private createGroupCell(params: any): void {
        // pull out the column that the grouping is on
        var rowGroupColumns = params.columnApi.getRowGroupColumns();

        // if we are using in memory grid grouping, then we try to look up the column that
        // we did the grouping on. however if it is not possible (happens when user provides
        // the data already grouped) then we just the current col, ie use cellrenderer of current col
        var columnOfGroupedCol = rowGroupColumns[params.node.level];
        if (_.missing(columnOfGroupedCol)) {
            columnOfGroupedCol = params.column;
        }
        var colDefOfGroupedCol = columnOfGroupedCol.getColDef();

        var groupName = this.getGroupName(params);
        var valueFormatted = this.valueFormatterService.formatValue(columnOfGroupedCol, params.node, params.scope, this.rowIndex, groupName);

        // reuse the params but change the value
        if (colDefOfGroupedCol && typeof colDefOfGroupedCol.cellRenderer === 'function') {
            // reuse the params but change the value
            params.value = groupName;
            params.valueFormatted = valueFormatted;

            // because we are talking about the different column to the original, any user provided params
            // are for the wrong column, so need to copy them in again.
            if (colDefOfGroupedCol.cellRendererParams) {
                _.assign(params, colDefOfGroupedCol.cellRendererParams);
            }
            this.cellRendererService.useCellRenderer(colDefOfGroupedCol.cellRenderer, this.eValue, params);
        } else {
            var valueToRender = _.exists(valueFormatted) ? valueFormatted : groupName;
            if (_.exists(valueToRender) && valueToRender !== '') {
                this.eValue.appendChild(document.createTextNode(valueToRender));
            }
        }
    }

    private addChildCount(params: any): void {
        // only include the child count if it's included, eg if user doing custom aggregation,
        // then this could be left out, or set to -1, ie no child count
        var suppressCount = params.suppressCount;
        if (!suppressCount && params.node.allChildrenCount >= 0) {
            this.eChildCount.innerHTML = "(" + params.node.allChildrenCount + ")";
        }
    }

    private getGroupName(params: any): string {
        if (params.keyMap && typeof params.keyMap === 'object') {
            var valueFromMap = params.keyMap[params.node.key];
            if (valueFromMap) {
                return valueFromMap;
            } else {
                return params.node.key;
            }
        } else {
            return params.node.key;
        }
    }

    private createLeafCell(params: any): void {
        if (_.exists(params.value)) {
            this.eValue.innerHTML = params.value;
        }
    }

    private addCheckboxIfNeeded(params: any): void {
        var checkboxNeeded = params.checkbox && !this.rowNode.footer &&!this.rowNode.floating;
        if (checkboxNeeded) {
            var cbSelectionComponent = new CheckboxSelectionComponent();
            this.context.wireBean(cbSelectionComponent);
            cbSelectionComponent.init({rowNode: this.rowNode});
            this.eCheckbox.appendChild(cbSelectionComponent.getGui());
            this.addDestroyFunc( ()=> cbSelectionComponent.destroy() );
        }
    }

    private addExpandAndContract(eGroupCell: HTMLElement): void {
        var eExpandedIcon = _.createIconNoSpan('groupExpanded', this.gridOptionsWrapper, null, svgFactory.createGroupContractedIcon);
        var eContractedIcon = _.createIconNoSpan('groupContracted', this.gridOptionsWrapper, null, svgFactory.createGroupExpandedIcon);
        this.eExpanded.appendChild(eExpandedIcon);
        this.eContracted.appendChild(eContractedIcon);

        this.addDestroyableEventListener(this.eExpanded, 'click', this.onExpandOrContract.bind(this));
        this.addDestroyableEventListener(this.eContracted, 'click', this.onExpandOrContract.bind(this));
        this.addDestroyableEventListener(eGroupCell, 'dblclick', this.onExpandOrContract.bind(this));

        // expand / contract as the user hits enter
        this.addDestroyableEventListener(eGroupCell, 'keydown', this.onKeyDown.bind(this));

        this.showExpandAndContractIcons();
    }

    private onKeyDown(event: KeyboardEvent): void {
        if (_.isKeyPressed(event, Constants.KEY_ENTER)) {
            this.onExpandOrContract();
            event.preventDefault();
        }
    }

    public onExpandOrContract(): void {
        this.rowNode.expanded = !this.rowNode.expanded;
        var refreshIndex = this.getRefreshFromIndex();

        this.gridApi.onGroupExpandedOrCollapsed(refreshIndex);

        this.showExpandAndContractIcons();

        var event: any = {node: this.rowNode};
        this.eventService.dispatchEvent(Events.EVENT_ROW_GROUP_OPENED, event)
    }

    private showExpandAndContractIcons(): void {

        var reducedLeafNode = this.columnController.isPivotMode() && this.rowNode.leafGroup;

        var expandable = this.rowNode.group && !this.rowNode.footer && !reducedLeafNode;
        if (expandable) {
            // if expandable, show one based on expand state
            _.setVisible(this.eExpanded, this.rowNode.expanded);
            _.setVisible(this.eContracted, !this.rowNode.expanded);
        } else {
            // it not expandable, show neither
            _.setVisible(this.eExpanded, false);
            _.setVisible(this.eContracted, false);
        }
    }

    // if we are showing footers, then opening / closing the group also changes the group
    // row, as the 'summaries' move to and from the header and footer. if not using footers,
    // then we only need to refresh from this row down.
    private getRefreshFromIndex(): number {
        if (this.gridOptionsWrapper.isGroupIncludeFooter()) {
            return this.rowIndex;
        } else {
            return this.rowIndex + 1;
        }
    }
}
