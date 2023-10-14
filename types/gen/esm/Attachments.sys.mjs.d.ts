declare module "resource://gre/modules/services-settings/Attachments.sys.mjs" {
    export class Downloader {
        get DownloadError();
        get BadContentError();
        get ServerInfoError();
        constructor();
        get cacheImpl();
        download();
        isDownloaded();
        deleteDownloaded();
        prune();
        downloadToDisk();
        downloadAsBytes();
        deleteFromDisk();
        _baseAttachmentsURL();
        _fetchAttachment();
        _readAttachmentCache();
        _readAttachmentDump();
        _makeDirs();
        _rmDirs();
    }
}