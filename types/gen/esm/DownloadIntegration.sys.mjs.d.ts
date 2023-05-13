declare module "resource://gre/modules/DownloadIntegration.sys.mjs" {
    var DownloadIntegration: {
        _store;
        shouldKeepBlockedData();
        initializePublicDownloadList(list);
        loadPublicDownloadListFromStore(list);
        shouldPersistDownload(aDownload);
        getSystemDownloadsDirectory();
        _downloadsDirectory;
        getPreferredDownloadsDirectory();
        getTemporaryDownloadsDirectory();
        shouldBlockForParentalControls(aDownload);
        shouldBlockForReputationCheck(aDownload);
        _shouldSaveZoneInformation();
        _zoneIdKey(aKey, aUrl, aFallback);
        downloadDone(aDownload);
        shouldViewDownloadInternally(aMimeType, aExtension);
        launchDownload(aDownload);
        confirmLaunchExecutable(path);
        launchFile(file, mimeInfo);
        showContainingDirectory(aFilePath);
        _createDownloadsDirectory(aName);
        _getDirectory(name);
        _initializeDownloadSpamProtection();
        addListObservers(aList, aIsPrivate);
        forceSave();
    };
}