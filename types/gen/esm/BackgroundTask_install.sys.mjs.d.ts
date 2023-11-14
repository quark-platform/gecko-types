declare module "resource://app/modules/backgroundtasks/BackgroundTask_install.sys.mjs" {
    export var backgroundTaskTimeoutSec: number;
    export function runBackgroundTask(commandLine?);
}