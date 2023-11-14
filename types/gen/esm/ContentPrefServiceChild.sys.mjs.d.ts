declare module "resource://gre/modules/ContentPrefServiceChild.sys.mjs" {
    export class ContentPrefsChild extends JSProcessActorChild {
        constructor();
        _getRandomId();
        receiveMessage(msg?);
        callFunction(call?, args?, callback?);
        addObserverForName(name?, observer?);
        removeObserverForName(name?, observer?);
    }
    export var ContentPrefServiceChild: {
        QueryInterface;
        addObserverForName;
        removeObserverForName;
        getCachedByDomainAndName;
        getCachedBySubdomainAndName;
        getCachedGlobal;
        extractDomain;
    };
}