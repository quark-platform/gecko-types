declare module "resource://app/modules/backgroundtasks/BackgroundTask_install.sys.mjs" {
    var backgroundTaskTimeoutSec: number;
    function runBackgroundTask(commandLine?);
}