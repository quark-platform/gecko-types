declare module "resource://gre/modules/backgroundtasks/BackgroundTask_backgroundupdate.sys.mjs" {
    var backgroundTaskTimeoutSec;
    function maybeSubmitBackgroundUpdatePing();
    function runBackgroundTask(commandLine);
}