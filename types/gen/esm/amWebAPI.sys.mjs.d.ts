declare module "resource://gre/modules/amWebAPI.sys.mjs" {
    export class WebAPI {
        constructor();
        init();
        getAddonByID();
        createInstall();
        reportAbuse();
        get abuseReportPanelEnabled();
        eventListenerAdded();
        eventListenerRemoved();
    }
}