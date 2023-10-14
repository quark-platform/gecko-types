declare module "resource://app/modules/ExtensionPopups.sys.mjs" {
    export class BasePopup {
        constructor(extension, viewNode, popupURL, browserStyle);
        for();
        close();
        destroy();
        destroyBrowser();
        get DESTROY_EVENT();
        get STYLESHEETS();
        get panel();
        receiveMessage();
        handleEvent();
        createBrowser();
        unblockParser();
        resizeBrowser();
        setBackground();
    }
    export class PanelPopup {
        constructor(extension, document, popupURL, browserStyle);
        get DESTROY_EVENT();
        destroy();
        closePopup();
    }
    export class ViewPopup {
        constructor(extension, window, popupURL, browserStyle, fixedWidth, blockParser);
        attach();
        removeTempPanel();
        destroy();
        get DESTROY_EVENT();
        closePopup();
    }
}