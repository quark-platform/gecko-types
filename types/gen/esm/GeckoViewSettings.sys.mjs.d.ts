declare module "resource://gre/modules/GeckoViewSettings.sys.mjs" {
    import type { GeckoViewModule } from "resource://gre/modules/GeckoViewModule.sys.mjs";
    export class GeckoViewSettings extends GeckoViewModule {
        onInit();
        onEvent();
        onSettingsUpdate();
        get allowJavascript();
        set allowJavascript(aAllowJavascript);
        get customUserAgent();
        set useTrackingProtection(aUse);
        set viewportMode(aViewportMode);
        get userAgentMode();
        set userAgentMode(aMode);
        get browsingContext();
        get userAgentOverride();
        set userAgentOverride(aUserAgent);
        get suspendMediaWhenInactive();
        set suspendMediaWhenInactive(aSuspendMediaWhenInactive);
        displayModeSettingToValue();
        set displayMode(aMode);
        set sessionContextId(aAttribute);
        get sessionContextId();
    }
}