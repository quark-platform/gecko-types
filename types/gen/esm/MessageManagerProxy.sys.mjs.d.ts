declare module "resource://gre/modules/MessageManagerProxy.sys.mjs" {
    export class MessageManagerProxy {
        constructor(target);
        dispose();
        observe();
        matches();
        sendAsyncMessage();
        get isDisconnected();
        addMessageListener();
        removeMessageListener();
        iterListeners();
        addListeners();
        removeListeners();
        handleEvent();
    }
}