// Type definitions for ag-grid v5.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export interface IClipboardService {
    pasteFromClipboard(): void;
    copyToClipboard(): void;
    copySelectedRowsToClipboard(): void;
    copySelectedRangeToClipboard(): void;
    copyRangeDown(): void;
}
