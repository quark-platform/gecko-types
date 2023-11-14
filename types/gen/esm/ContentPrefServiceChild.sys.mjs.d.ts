declare module "resource://gre/modules/ContentPrefServiceChild.sys.mjs" {
    export class ContentPrefsChild extends JSProcessActorChild {
        constructor();
        _getRandomId();
        receiveMessage();
        callFunction();
        addObserverForName();
        removeObserverForName();
    }
    var ContentPrefServiceChild: {
        QueryInterface;
        addObserverForName;
        removeObserverForName;
        getCachedByDomainAndName;
        getCachedBySubdomainAndName;
        getCachedGlobal;
        extractDomain;
    };
}