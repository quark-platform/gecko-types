declare module "resource://gre/modules/ActorManagerParent.sys.mjs" {
    export var ActorManagerParent: {
        _addActors(actors?, kind?);
        addJSProcessActors(actors?);
        addJSWindowActors(actors?);
    };
}