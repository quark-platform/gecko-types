declare module "resource://gre/modules/DownloadPaths.sys.mjs" {
    export var DownloadPaths: {
        sanitize(leafName?);
        createNiceUniqueFile(templateFile?);
        splitBaseNameAndExtension(leafName?);
    };
}