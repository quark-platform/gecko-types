declare module "resource://app/modules/ExtensionPopups.sys.mjs" {
    export class BasePopup {
        constructor(extension, viewNode, popupURL, browserStyle, param4, param5);
        for(extension?, window?);
        close();
        destroy();
        destroyBrowser(browser?, param1?);
        get DESTROY_EVENT();
        get STYLESHEETS();
        get panel();
        receiveMessage(param0?);
        handleEvent(event?);
        createBrowser(viewNode?, param1?);
        unblockParser();
        resizeBrowser(param0?);
        setBackground(background?);
    }
    import type { BasePopup } from "resource://app/modules/ExtensionPopups.sys.mjs";
    export class PanelPopup extends BasePopup {
        constructor(extension, document, popupURL, browserStyle);
        get DESTROY_EVENT();
        destroy();
        closePopup();
    }
    import type { BasePopup } from "resource://app/modules/ExtensionPopups.sys.mjs";
    export class ViewPopup extends BasePopup {
        constructor(extension, window, popupURL, browserStyle, fixedWidth, blockParser);
        attach(viewNode?);
        removeTempPanel();
        destroy();
        get DESTROY_EVENT();
        closePopup();
    }
}