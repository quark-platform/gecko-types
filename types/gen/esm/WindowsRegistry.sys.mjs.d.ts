declare module "resource://gre/modules/WindowsRegistry.sys.mjs" {
    export var WindowsRegistry: {
        readRegKey(aRoot?, aPath?, aKey?, aRegistryNode?);
        removeRegKey(aRoot?, aPath?, aKey?, aRegistryNode?);
    };
}