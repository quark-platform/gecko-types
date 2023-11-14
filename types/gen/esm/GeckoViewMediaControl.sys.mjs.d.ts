declare module "resource://gre/modules/GeckoViewMediaControl.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewMediaControl extends GeckoViewModule {
        onInit();
        onInitBrowser();
        onDestroyBrowser();
        onEnable();
        onDisable();
        get controller();
        onEvent();
        handleEvent();
        handleActivated();
        handleDeactivated();
        handlePositionStateChanged();
        handleSupportedKeysChanged();
        handleMetadataChanged();
        handlePlaybackStateChanged();
    }
}