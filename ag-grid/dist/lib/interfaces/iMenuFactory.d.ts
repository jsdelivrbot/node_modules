// Type definitions for ag-grid v5.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "../entities/column";
export interface IMenuFactory {
    showMenuAfterButtonClick(column: Column, eventSource: HTMLElement): void;
    showMenuAfterMouseEvent(column: Column, mouseEvent: MouseEvent): void;
    isMenuEnabled(column: Column): boolean;
}
