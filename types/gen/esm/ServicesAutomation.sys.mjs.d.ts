declare module "resource://gre/modules/services-automation/ServicesAutomation.sys.mjs" {
    var Authentication: {
        isLoggedIn();
        isReady();
        getSignedInUser();
        shortWaitForVerification(ms);
        _confirmUser(uri);
        _completeVerification(username);
        signIn(username, password);
        signOut();
    };
    var Sync: {
        getSyncLogsDirectory();
        init();
        observe(subject, topic, data);
        configureSync();
        triggerSync();
        wipeLogs();
        getLogs();
    };
    function initConfig(autoconfig);
    function triggerSync(username, password, autoconfig);
}