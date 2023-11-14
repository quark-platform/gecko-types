declare module "resource://gre/modules/services-settings/Attachments.sys.mjs" {
    export class Downloader {
        get DownloadError();
        get BadContentError();
        get ServerInfoError();
        constructor(param0);
        get cacheImpl();
        download(record?, options?);
        isDownloaded(record?);
        deleteDownloaded(record?, options?);
        prune(excludeIds?);
        downloadToDisk(record?, param1?);
        downloadAsBytes(record?, param1?);
        deleteFromDisk(record?);
        _baseAttachmentsURL();
        _fetchAttachment(url?);
        _readAttachmentCache(attachmentId?);
        _readAttachmentDump(attachmentId?);
        _makeDirs();
        _rmDirs();
        _RESOURCE_BASE_URL;
    }
}