declare module "resource://gre/modules/DownloadLastDir.sys.mjs" {
    export class DownloadLastDir {
        constructor(aWindow, aForcePrivate);
        isPrivate();
        get file();
        set file(val);
        cleanupPrivateFile();
        getFileAsync();
        setFile();
    }
}