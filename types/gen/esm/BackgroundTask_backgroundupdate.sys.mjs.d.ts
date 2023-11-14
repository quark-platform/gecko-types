declare module "resource://gre/modules/backgroundtasks/BackgroundTask_backgroundupdate.sys.mjs" {
    export var backgroundTaskTimeoutSec;
    export function maybeSubmitBackgroundUpdatePing();
    export function runBackgroundTask(commandLine?);
}