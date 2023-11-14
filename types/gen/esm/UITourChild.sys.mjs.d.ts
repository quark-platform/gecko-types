declare module "resource://app/modules/UITourChild.sys.mjs" {
    export class UITourChild extends JSWindowActorChild {
        handleEvent();
        isTestingOrigin();
        isSafeScheme();
        ensureTrustedOrigin();
        receiveMessage();
        sendPageEvent();
    }
}