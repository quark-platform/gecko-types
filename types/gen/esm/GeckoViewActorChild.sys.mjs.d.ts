declare module "resource://gre/modules/GeckoViewActorChild.sys.mjs" {
    export class GeckoViewActorChild extends JSWindowActorChild {
        initLogging(aModuleName?);
        actorCreated();
    }
}