declare module "resource://gre/modules/GeckoViewActorParent.sys.mjs" {export class GeckoViewActorParent {
    static initLogging(aModuleName: any): any;
    get browser(): any;
    get window(): any;
    get eventDispatcher(): any;
    receiveMessage(aMessage: any): any;
}
}