declare module "resource://gre/modules/ExtensionShortcuts.sys.mjs" {
    export class ExtensionShortcutKeyMap {
        buildForAddonIds();
        recordShortcut();
        removeShortcut();
        getFirstAddonName();
        has();
        constructor();
        defaultConstructor();
        getPlatformShortcutString();
        get();
        add();
        delete();
    }
    export class ExtensionShortcuts {
        removeCommandsFromStorage();
        constructor();
        allCommands();
        updateCommand();
        resetCommand();
        loadCommands();
        registerKeys();
        register();
        unregister();
        loadCommandsFromManifest();
        loadCommandsFromStorage();
        registerKeysToDocument();
        buildKey();
        buildKeyFromShortcut();
    }
}