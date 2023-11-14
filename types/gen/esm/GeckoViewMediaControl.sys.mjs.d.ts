declare module "resource://gre/modules/GeckoViewMediaControl.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewMediaControl extends GeckoViewModule {
        onInit();
        onInitBrowser();
        onDestroyBrowser();
        onEnable();
        onDisable();
        get controller();
        onEvent(aEvent?, aData?, aCallback?);
        handleEvent(aEvent?);
        handleActivated();
        handleDeactivated();
        handlePositionStateChanged(aEvent?);
        handleSupportedKeysChanged();
        handleMetadataChanged();
        handlePlaybackStateChanged();
    }
}