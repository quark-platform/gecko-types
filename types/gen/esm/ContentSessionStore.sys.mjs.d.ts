declare module "resource://app/modules/sessionstore/ContentSessionStore.sys.mjs" {
    export class ContentSessionStore {
        constructor(mm);
        receiveMessage();
        restoreHistory(data?);
        restoreTabContent();
        flush();
        handleEvent(event?);
        onUnload();
    }
}