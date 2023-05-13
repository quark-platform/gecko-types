declare module "resource://app/modules/sessionstore/ContentSessionStore.sys.mjs" {
    export class ContentSessionStore {
        constructor(mm);
        receiveMessage();
        restoreHistory();
        restoreTabContent();
        flush();
        handleEvent();
        onUnload();
    }
}