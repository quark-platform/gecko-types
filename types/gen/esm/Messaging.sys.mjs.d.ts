declare module "resource://gre/modules/Messaging.sys.mjs" {
    export var EventDispatcher: {
        instance;
        for(aWindow?);
        byName(aName?);
        forMessageManager(aMessageManager?);
        forActor(aActor?);
        receiveMessage(aMsg?);
    };
}