declare module "resource://gre/modules/ReaderMode.sys.mjs" {
    var ReaderMode: {
        DEBUG: number;
        enterTime;
        leaveTime;
        enterReaderMode(docShell, win);
        leaveReaderMode(docShell, win);
        getOriginalUrl(url);
        getOriginalUrlObjectForDisplay(url);
        parseDocument(doc);
        downloadAndParseDocument(url, docContentType);
        _downloadDocument(url, docContentType);
        log(msg);
        _readerParse(doc);
        _assignLanguage(article);
        _maybeAssignTextDirection(article);
        _assignReadTime(article);
        _getReadingSpeedForLanguage(lang);
        _isDocumentPlainText(doc);
        _convertPlainTextDocument(doc);
    };
}