declare module "resource://app/modules/UITourChild.sys.mjs" {export class UITourChild extends JSWindowActorChild {
    handleEvent(event: any): void;
    isTestingOrigin(aURI: any): boolean;
    isSafeScheme(aURI: any): boolean;
    ensureTrustedOrigin(): boolean;
    receiveMessage(aMessage: any): void;
    sendPageEvent(type: any, detail: any): void;
}
}