declare module "resource://gre/modules/GeckoViewNavigation.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewNavigation extends GeckoViewModule {
        onInitBrowser();
        onInit();
        validateHeader(key?, value?, filter?);
        onEvent(aEvent?, aData?, aCallback?);
        waitAndSetupWindow(aSessionId?, aOpenWindowInfo?, aName?);
        handleNewSession(aUri?, aOpenWindowInfo?, aWhere?, aFlags?, aName?);
        createContentWindow(aUri?, aOpenWindowInfo?, aWhere?, aFlags?, aTriggeringPrincipal?, aCsp?);
        createContentWindowInFrame(aUri?, aParams?, aWhere?, aFlags?, aName?);
        handleOpenUri(param0?);
        openURI(aUri?, aOpenWindowInfo?, aWhere?, aFlags?, aTriggeringPrincipal?, aCsp?);
        openURIInFrame(aUri?, aParams?, aWhere?, aFlags?, aName?);
        canClose();
        onEnable();
        onDisable();
        serializePermission(param0?);
        isProductURL(aLocationURI?);
        onLocationChange(aWebProgress?, aRequest?, aLocationURI?, aFlags?);
    }
}