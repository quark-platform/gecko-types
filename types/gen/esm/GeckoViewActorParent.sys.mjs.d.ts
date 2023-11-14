declare module "resource://gre/modules/GeckoViewActorParent.sys.mjs" {
    export class GeckoViewActorParent extends JSWindowActorParent {
        initLogging(aModuleName?);
        get browser();
        get window();
        get eventDispatcher();
        receiveMessage(aMessage?);
    }
}