declare module "resource://gre/modules/amWebAPI.sys.mjs" {
    export class WebAPI extends APIObject {
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