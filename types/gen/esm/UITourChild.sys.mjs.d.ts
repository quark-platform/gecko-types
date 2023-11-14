declare module "resource://app/modules/UITourChild.sys.mjs" {
    export class UITourChild extends JSWindowActorChild {
        handleEvent(event?);
        isTestingOrigin(aURI?);
        isSafeScheme(aURI?);
        ensureTrustedOrigin();
        receiveMessage(aMessage?);
        sendPageEvent(type?, detail?);
    }
}