declare module "resource://gre/modules/DownloadPaths.sys.mjs" {
    var DownloadPaths: {
        sanitize(leafName?);
        createNiceUniqueFile(templateFile?);
        splitBaseNameAndExtension(leafName?);
    };
}