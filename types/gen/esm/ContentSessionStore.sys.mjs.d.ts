declare module "resource://app/modules/sessionstore/ContentSessionStore.sys.mjs" {
    export class ContentSessionStore {
        constructor(mm);
        receiveMessage(param0?);
        restoreHistory(data?);
        restoreTabContent(param0?);
        flush(param0?);
        handleEvent(event?);
        onUnload();
    }
}