declare module "resource://gre/modules/remotepagemanager/MessagePort.sys.mjs" {
    export class MessageListener {
        constructor();
        keys();
        has();
        callListeners();
        addMessageListener();
        removeMessageListener();
    }
    export class MessagePort {
        constructor(messageManagerOrActor, portID);
        addMessageListeners();
        removeMessageListeners();
        swapMessageManager();
        sendRequest();
        receiveRequest();
        receiveResponse();
        message();
        addMessageListener();
        removeMessageListener();
        sendAsyncMessage();
        destroy();
        wrapPromise();
    }
}