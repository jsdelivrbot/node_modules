import {ICellEditor} from "./iCellEditor";
import {ICellEditorParams} from "./iCellEditor";
import {Component} from "../../widgets/component";
import {ICellRenderer} from "../cellRenderers/iCellRenderer";
import {ICellRendererFunc} from "../cellRenderers/iCellRenderer";
import {Constants} from "../../constants";


export interface ILargeTextEditorParams extends ICellEditorParams {
    maxLength: number;
    rows: number;
    cols: number;
    cellRenderer: {new(): ICellRenderer} | ICellRendererFunc | string;
}

export class LargeTextCellEditor extends Component implements ICellEditor {
    private static TEMPLATE =
        // tab index is needed so we can focus, which is needed for keyboard events
        '<div class="ag-large-text" tabindex="0">' +
        '<div class="ag-large-textarea"></div>' +
        '</div>';

    private params:ILargeTextEditorParams;
    private textarea:any;

    constructor() {
        super(LargeTextCellEditor.TEMPLATE);
    }

    public init(params:ILargeTextEditorParams):void {
        this.params = params;

        this.textarea = document.createElement("textarea");
        this.textarea.maxLength = params.maxLength ? params.maxLength : "200";
        this.textarea.cols = params.cols ? params.cols : "60";
        this.textarea.rows = params.rows ? params.rows : "10";
        this.textarea.value = params.value;

        this.getGui().querySelector('.ag-large-textarea').appendChild(this.textarea);

        this.addGuiEventListener('keydown', this.onKeyDown.bind(this));
    }

    private onKeyDown(event:KeyboardEvent):void {
        var key = event.which || event.keyCode;
        if (key == Constants.KEY_LEFT ||
            key == Constants.KEY_UP ||
            key == Constants.KEY_RIGHT ||
            key == Constants.KEY_DOWN ||
            (event.shiftKey && key == Constants.KEY_ENTER)) { // shift+enter allows for newlines
            event.stopPropagation();
        }
    }

    public afterGuiAttached():void {
        this.textarea.focus();
    }

    public getValue():any {
        return this.textarea.value;
    }

    public isPopup():boolean {
        return true;
    }
}
