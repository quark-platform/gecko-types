declare module "resource://app/modules/LoginBreaches.sys.mjs" {
    export var LoginBreaches: {
        REMOTE_SETTINGS_COLLECTION;
        update(breaches?);
        getPotentialBreachesByLoginGUID(logins?, breaches?);
        getPotentiallyVulnerablePasswordsByLoginGUID(logins?);
        clearAllPotentiallyVulnerablePasswords();
        _breachAlertIsDismissed(login?, breach?, dismissedBreachAlerts?);
        _breachInvolvedPasswords(breach?);
        _breachWasAfterPasswordLastChanged(breach?, login?);
    };
}