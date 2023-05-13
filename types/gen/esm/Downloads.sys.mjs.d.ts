declare module "resource://gre/modules/Downloads.sys.mjs" {
    var Downloads: {
        get PUBLIC(): any;
        get PRIVATE(): any;
        get ALL(): any;
        createDownload;
        fetch(aSource, aTarget, aOptions);
        getList(aType);
        _promiseListsInitialized;
        _lists: {};
        getSummary(aType);
        _summaries: {};
        getSystemDownloadsDirectory;
        getPreferredDownloadsDirectory;
        getTemporaryDownloadsDirectory;
        Error;
    };
}