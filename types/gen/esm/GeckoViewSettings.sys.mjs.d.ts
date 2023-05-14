declare module "resource://gre/modules/GeckoViewSettings.sys.mjs" {
    export class GeckoViewSettings {
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