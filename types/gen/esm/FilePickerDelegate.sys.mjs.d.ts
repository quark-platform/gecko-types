declare module "resource://gre/modules/FilePickerDelegate.sys.mjs" {
    export class FilePickerDelegate {
        init();
        get mode();
        appendRawFilter();
        show();
        open();
        _resolveFiles();
        get file();
        get fileURL();
        _getEnumerator();
        get files();
        _getDOMFile();
        get domFileOrDirectory();
        get domFileOrDirectoryEnumerator();
        get defaultString();
        set defaultString(aValue);
        get defaultExtension();
        set defaultExtension(aValue);
        get filterIndex();
        set filterIndex(aValue);
        get displayDirectory();
        set displayDirectory(aValue);
        get displaySpecialDirectory();
        set displaySpecialDirectory(aValue);
        get addToRecentDocs();
        set addToRecentDocs(aValue);
        get okButtonLabel();
        set okButtonLabel(aValue);
        get capture();
        set capture(aValue);
    }
}