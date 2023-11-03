declare module "resource://gre/modules/AppMenuNotifications.sys.mjs" {
    var AppMenuNotifications: {
        _notifications;
        _hasInitialized;
        get notifications(): any;
        _lazyInit();
        uninit();
        observe(subject?, topic?, status?);
        get activeNotification(): any;
        showNotification(id?, mainAction?, secondaryAction?, options?);
        showBadgeOnlyNotification(id?);
        removeNotification(id?);
        dismissNotification(id?);
        callMainAction(win?, notification?, fromDoorhanger?);
        callSecondaryAction(win?, notification?);
        _callAction(win?, notification?, action?, fromDoorhanger?);
        _removeNotification(notification?);
        _updateNotifications();
    };
}