declare module "resource://gre/modules/Log.sys.mjs" {
    export class Log {
        constructor(session);
        destructor();
        enable();
        disable();
        _getLogCategory();
        observe();
        get QueryInterface();
    }
}