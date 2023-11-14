declare module "resource://gre/modules/ExtensionActions.sys.mjs" {
    export class PageActionBase extends PanelActionBase {
        constructor(tabContext, extension);
        handleLocationChange();
        isShownForTab();
        loadIconData();
        getPinned();
        getTargetFromDetails();
        api();
    }
    export class BrowserActionBase extends PanelActionBase {
        constructor(tabContext, extension);
        loadIconData();
        handleLocationChange();
        getTargetFromDetails();
        getDefaultArea();
        getTextColor();
        isShownForTab();
        api();
    }
}