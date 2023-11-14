declare module "resource://gre/modules/MessageManagerProxy.sys.mjs" {
    export class MessageManagerProxy {
        constructor(target);
        dispose();
        observe(subject?, topic?, data?);
        matches(target?, messageManager?);
        sendAsyncMessage();
        get isDisconnected();
        addMessageListener(message?, listener?);
        removeMessageListener(message?, listener?);
        iterListeners();
        addListeners(target?);
        removeListeners(target?);
        handleEvent(event?);
    }
}