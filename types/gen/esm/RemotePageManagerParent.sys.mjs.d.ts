declare module "resource://gre/modules/remotepagemanager/RemotePageManagerParent.sys.mjs" {
    export class RemotePages {
        constructor(urls);
        destroy();
        portCreated();
        portMessageReceived();
        removeMessagePort();
        registerPortListener();
        sendAsyncMessage();
        addMessageListener();
        removeMessageListener();
        portsForBrowser();
    }
    var RemotePageManager: {
        addRemotePageListener;
        removeRemotePageListener;
    };
}