declare module "resource://app/modules/policies/WebsiteFilter.sys.mjs" {
    export var WebsiteFilter: {
        init(blocklist?, exceptionlist?);
        shouldLoad(contentLocation?, loadInfo?, mimeTypeGuess?);
        shouldProcess(contentLocation?, loadInfo?, mimeTypeGuess?);
        observe(subject?, topic?, data?);
        classDescription;
        contractID;
        classID;
        QueryInterface;
        createInstance(iid?);
        isAllowed(url?);
    };
}