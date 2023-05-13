declare module "resource://app/modules/LoginBreaches.sys.mjs" {
    var LoginBreaches: {
        REMOTE_SETTINGS_COLLECTION;
        update();
        getPotentialBreachesByLoginGUID(logins);
        getPotentiallyVulnerablePasswordsByLoginGUID(logins);
        clearAllPotentiallyVulnerablePasswords();
        _breachAlertIsDismissed(login, breach, dismissedBreachAlerts);
        _breachInvolvedPasswords(breach);
        _breachWasAfterPasswordLastChanged(breach, login);
    };
}