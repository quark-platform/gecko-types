declare module "resource://app/modules/sessionstore/SessionFile.sys.mjs" {
    var SessionFile: {
        read();
        write(aData);
        wipe();
        get Paths(): any;
    };
}