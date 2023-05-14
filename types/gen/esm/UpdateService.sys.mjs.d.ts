declare module "resource://gre/modules/UpdateService.sys.mjs" {
    function UpdateService();
    function UpdateManager();
    export class CheckerService {
        getUpdateURL();
        checkForUpdates();
        stopCheck();
        stopAllChecks();
    }
}