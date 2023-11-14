declare module "resource://gre/modules/DownloadUIHelper.sys.mjs" {
    export var DownloadUIHelper: {
        getPrompter(aParent?);
        loadFileIn(file?);
    };
}