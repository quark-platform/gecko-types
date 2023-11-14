declare module "resource://gre/modules/amWebAPI.sys.mjs" {
    export class WebAPI extends APIObject {
        constructor();
        init(window?);
        getAddonByID(id?);
        createInstall(options?);
        reportAbuse(id?);
        get abuseReportPanelEnabled();
        eventListenerAdded(type?);
        eventListenerRemoved(type?);
    }
}