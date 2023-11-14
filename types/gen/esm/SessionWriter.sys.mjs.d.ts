declare module "resource://app/modules/sessionstore/SessionWriter.sys.mjs" {
    export var SessionWriter: {
        init(origin?, useOldExtension?, paths?, prefs?);
        write(state?, options?);
        wipe();
    };
}