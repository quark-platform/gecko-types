declare module "resource://gre/modules/ActorManagerParent.sys.mjs" {export namespace ActorManagerParent {
    function _addActors(actors: any, kind: any): void;
    function addJSProcessActors(actors: any): void;
    function addJSWindowActors(actors: any): void;
}
}