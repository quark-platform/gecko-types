declare module "resource://gre/modules/PlacesBackups.sys.mjs" {
    var PlacesBackups: {
        get filenamesRegex(): any;
        getBackupFolder;
        get profileRelativeFolderPath(): any;
        getBackupFiles;
        invalidateCache();
        toISODateString;
        getFilenameForDate;
        getDateForFile;
        getMostRecentBackup;
        hasRecentBackup();
        saveBookmarksToJSONFile(aFilePath?);
        create;
        getBookmarkCountForFile;
        getBookmarksTree();
    };
}