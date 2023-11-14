declare module "resource://gre/modules/GeckoViewNavigation.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewNavigation extends GeckoViewModule {
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
        isProductURL();
        onLocationChange();
    }
}