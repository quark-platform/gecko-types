declare module "resource://gre/modules/FormHistoryStartup.sys.mjs" {
    export class FormHistoryStartup {
        observe(_subject?, topic?, _data?);
        init();
        receiveMessage(message?);
        classID;
        QueryInterface;
    }
}