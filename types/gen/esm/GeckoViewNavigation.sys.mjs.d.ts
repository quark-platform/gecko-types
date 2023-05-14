declare module "resource://gre/modules/GeckoViewNavigation.sys.mjs" {
    export class GeckoViewNavigation {
        onInitBrowser();
        onInit();
        validateHeader();
        onEvent();
        waitAndSetupWindow();
        handleNewSession();
        createContentWindow();
        createContentWindowInFrame();
        handleOpenUri();
        openURI();
        openURIInFrame();
        canClose();
        onEnable();
        onDisable();
        serializePermission();
        onLocationChange();
    }
}