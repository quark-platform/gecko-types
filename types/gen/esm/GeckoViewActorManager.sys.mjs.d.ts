declare module "resource://gre/modules/GeckoViewActorManager.sys.mjs" {
    export var GeckoViewActorManager: {
        addJSWindowActors(actors?);
        _register(actorName?, actor?);
    };
}