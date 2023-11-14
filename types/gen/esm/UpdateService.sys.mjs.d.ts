declare module "resource://gre/modules/UpdateService.sys.mjs" {
    export function UpdateService();
    export function UpdateManager();
    export class CheckerService {
        getUpdateURL(checkType?);
        checkForUpdates(checkType?);
        stopCheck(checkId?);
        stopAllChecks();
        classID;
        QueryInterface;
    }
}