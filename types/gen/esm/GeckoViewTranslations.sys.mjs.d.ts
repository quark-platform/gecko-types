declare module "resource://gre/modules/GeckoViewTranslations.sys.mjs" {export class GeckoViewTranslations {
    onInit(): void;
    onEnable(): void;
    onDisable(): void;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
    handleEvent(aEvent: any): void;
}
}