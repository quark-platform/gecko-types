declare module "resource://gre/modules/GeckoViewActorParent.sys.mjs" {
    export class GeckoViewActorParent {
        initLogging();
        get browser();
        get window();
        get eventDispatcher();
        receiveMessage();
    }
}