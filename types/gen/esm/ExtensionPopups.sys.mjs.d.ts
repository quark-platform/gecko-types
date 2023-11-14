declare module "resource://app/modules/ExtensionPopups.sys.mjs" {
    export class BasePopup {
        constructor(extension, viewNode, popupURL, browserStyle);
        for(extension?, window?);
        close();
        destroy();
        destroyBrowser(browser?);
        get DESTROY_EVENT();
        get STYLESHEETS();
        get panel();
        receiveMessage();
        handleEvent(event?);
        createBrowser(viewNode?);
        unblockParser();
        resizeBrowser();
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