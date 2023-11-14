declare module "resource://gre/modules/services-common/observers.sys.mjs" {
    export var Observers: {
        add(topic?, callback?, thisObject?);
        remove(topic?, callback?, thisObject?);
        notify(topic?, subject?, data?);
        _cache;
    };
}