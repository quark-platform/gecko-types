declare module "resource://gre/modules/ExtensionShortcuts.sys.mjs" {
    export class ExtensionShortcutKeyMap extends DefaultMap {
        buildForAddonIds(addonIds?);
        recordShortcut(shortcutString?, addonName?, commandName?);
        removeShortcut(shortcutString?, addonName?, commandName?);
        getFirstAddonName(shortcutString?);
        has(shortcutString?);
        constructor();
        defaultConstructor();
        getPlatformShortcutString(shortcutString?);
        get(shortcutString?);
        add(shortcutString?, addonCommandValue?);
        delete(shortcutString?);
    }
    export class ExtensionShortcuts {
        removeCommandsFromStorage(extensionId?);
        constructor(param0);
        allCommands();
        updateCommand(param0?);
        resetCommand(name?);
        loadCommands();
        registerKeys(commands?);
        register();
        unregister();
        loadCommandsFromManifest(manifest?);
        loadCommandsFromStorage(extensionId?);
        registerKeysToDocument(window?, commands?);
        buildKey(doc?, name?, shortcut?);
        buildKeyFromShortcut(doc?, name?, shortcut?);
    }
}