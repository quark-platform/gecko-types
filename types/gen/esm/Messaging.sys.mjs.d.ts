declare module "resource://gre/modules/Messaging.sys.mjs" {
    var EventDispatcher: {
        instance;
        for(aWindow?);
        byName(aName?);
        forMessageManager(aMessageManager?);
        forActor(aActor?);
        receiveMessage(aMsg?);
    };
}