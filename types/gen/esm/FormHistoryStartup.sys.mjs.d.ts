declare module "resource://gre/modules/FormHistoryStartup.sys.mjs" {export class FormHistoryStartup {
    classID: any;
    QueryInterface: any;
    observe(_subject: any, topic: any, _data: any): void;
    init(): void;
    inited: boolean;
    receiveMessage(message: any): void;
    _queryInstance: {};
    #private;
}
}