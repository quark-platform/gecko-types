declare module "resource://gre/modules/ExtensionActivityLog.sys.mjs" {
    export var ExtensionActivityLog: {
        initialized;
        listeners;
        watchedIds;
        init();
        log(id?, viewType?, type?, name?, data?, timeStamp?);
        addListener(id?, callback?);
        removeListener(id?, callback?);
        receiveMessage(param0?);
    };
}