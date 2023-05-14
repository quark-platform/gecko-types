declare module "resource://gre/modules/GeckoViewMediaControl.sys.mjs" {
    export class GeckoViewMediaControl {
        onInit();
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