declare module "resource://gre/modules/ExtensionChild.sys.mjs" {
    var ExtensionActivityLogChild: {
        _initialized;
        enabledExtensions;
        init();
        receiveMessage(param0);
        log(context, type, name, data);
        _sendActivity(data);
    };
    var ExtensionChild: {
        BrowserExtensionContent;
        ChildAPIManager;
        ChildLocalAPIImplementation;
        MessageEvent;
        Messenger;
        Port;
        ProxyAPIImplementation;
        SimpleEventAPI;
    };
}