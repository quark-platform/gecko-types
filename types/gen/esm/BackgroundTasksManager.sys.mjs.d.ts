declare module "resource://gre/modules/BackgroundTasksManager.sys.mjs" {
    export class BackgroundTasksManager {
        get helpInfo();
        handle();
        runBackgroundTaskNamed();
    }
    var EXIT_CODE: {
        SUCCESS: number;
        NOT_FOUND: number;
        EXCEPTION: number;
        TIMEOUT: number;
        LAST_RESERVED: number;
    };
}