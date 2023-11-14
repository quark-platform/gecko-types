declare module "resource://gre/modules/Downloads.sys.mjs" {
    export var Downloads: {
        get PUBLIC(): any;
        get PRIVATE(): any;
        get ALL(): any;
        createDownload(properties?);
        fetch(source?, target?, options?);
        getList(type?);
        _promiseListsInitialized;
        _lists: {};
        getSummary(type?);
        _summaries: {};
        getSystemDownloadsDirectory();
        getPreferredDownloadsDirectory();
        getTemporaryDownloadsDirectory();
        Error;
    };
}