declare module "resource://gre/modules/ExtensionActions.sys.mjs" {
    export class PageActionBase extends PanelActionBase {
        constructor(tabContext, extension);
        handleLocationChange(eventType?, tab?, fromBrowse?);
        isShownForTab(tab?);
        loadIconData();
        getPinned();
        getTargetFromDetails(param0?);
        api(context?);
    }
    export class BrowserActionBase extends PanelActionBase {
        constructor(tabContext, extension);
        loadIconData();
        handleLocationChange(eventType?, tab?, fromBrowse?);
        getTargetFromDetails(param0?);
        getDefaultArea();
        getTextColor(values?);
        isShownForTab(tab?);
        api(context?);
    }
}