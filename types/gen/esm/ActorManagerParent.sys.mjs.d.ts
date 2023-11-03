declare module "resource://gre/modules/ActorManagerParent.sys.mjs" {
    var ActorManagerParent: {
        _addActors(actors?, kind?);
        addJSProcessActors(actors?);
        addJSWindowActors(actors?);
    };
}