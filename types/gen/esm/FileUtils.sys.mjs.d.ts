declare module "resource://gre/modules/FileUtils.sys.mjs" {
    var FileUtils: {
        MODE_RDONLY: number;
        MODE_WRONLY: number;
        MODE_RDWR: number;
        MODE_CREATE: number;
        MODE_APPEND: number;
        MODE_TRUNCATE: number;
        PERMS_FILE: number;
        PERMS_DIRECTORY: number;
        getFile;
        getDir;
        openFileOutputStream;
        openAtomicFileOutputStream;
        openSafeFileOutputStream;
        _initFileOutputStream;
        closeAtomicFileOutputStream;
        closeSafeFileOutputStream;
        File;
    };
}