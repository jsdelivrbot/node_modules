// Type definitions for ag-grid v5.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export declare class TemplateService {
    private $scope;
    private templateCache;
    private waitingCallbacks;
    getTemplate(url: any, callback: any): any;
    handleHttpResult(httpResult: any, url: any): void;
}
