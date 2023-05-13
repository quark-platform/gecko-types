declare module "resource://gre/modules/WindowsRegistry.sys.mjs" {
    var WindowsRegistry: {
        readRegKey(aRoot, aPath, aKey);
        removeRegKey(aRoot, aPath, aKey);
    };
}