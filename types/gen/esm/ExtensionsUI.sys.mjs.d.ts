declare module "resource://app/modules/ExtensionsUI.sys.mjs" {
    var ExtensionsUI: {
        sideloaded;
        updates;
        sideloadListener;
        pendingNotifications;
        init();
        _checkForSideloaded();
        _updateNotifications();
        showAddonsManager(tabbrowser?, strings?, icon?);
        showSideloaded(tabbrowser?, addon?);
        showUpdate(browser?, info?);
        observe(subject?, topic?, data?);
        _buildStrings(info?);
        showPermissionsPrompt(target?, strings?, icon?);
        showDefaultSearchPrompt(target?, strings?, icon?);
        showInstallNotification(target?, addon?);
        showQuarantineConfirmation(browser?, policy?);
        originControlsMenu(popup?, extensionId?);
    };
}