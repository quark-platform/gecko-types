declare module "resource://gre/modules/NativeManifests.sys.mjs" {
    var NativeManifests: {
        _initializePromise;
        _lookup;
        init();
        _winLookup(type?, name?, context?);
        _tryPath(type?, path?, name?, context?, logIfNotFound?);
        _tryPaths(type?, name?, dirs?, context?);
        lookupManifest(type?, name?, context?);
    };
}