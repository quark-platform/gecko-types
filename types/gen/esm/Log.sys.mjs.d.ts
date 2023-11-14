declare module "resource://gre/modules/Log.sys.mjs" {
    export class Log extends ContentProcessDomain {
        constructor(session);
        destructor();
        enable();
        disable();
        _getLogCategory(category?);
        observe(message?);
        get QueryInterface();
    }
}