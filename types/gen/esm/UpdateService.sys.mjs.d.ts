declare module "resource://gre/modules/UpdateService.sys.mjs" {
    function UpdateService();
    function UpdateManager();
    export class CheckerService {
        getUpdateURL(checkType?);
        checkForUpdates(checkType?);
        stopCheck(checkId?);
        stopAllChecks();
    }
}