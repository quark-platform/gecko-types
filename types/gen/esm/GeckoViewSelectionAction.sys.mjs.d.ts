declare module "resource://gre/modules/GeckoViewSelectionAction.sys.mjs" {export class GeckoViewSelectionAction {
    onEnable(): void;
    onDisable(): void;
    get actor(): any;
    onEvent(aEvent: any, aData: any, aCallback: any): void;
}
}