declare module "resource://gre/modules/services-settings/Attachments.sys.mjs" {
    export class Downloader {
        get DownloadError();
        get BadContentError();
        get ServerInfoError();
        constructor();
        get cacheImpl();
        download(record?, options?);
        isDownloaded(record?);
        deleteDownloaded(record?, options?);
        prune(excludeIds?);
        downloadToDisk(record?);
        downloadAsBytes(record?);
        deleteFromDisk(record?);
        _baseAttachmentsURL();
        _fetchAttachment(url?);
        _readAttachmentCache(attachmentId?);
        _readAttachmentDump(attachmentId?);
        _makeDirs();
        _rmDirs();
    }
}