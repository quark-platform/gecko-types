declare module "resource://app/modules/sessionstore/SessionFile.sys.mjs" {
    export var SessionFile: {
        read();
        write(aData?);
        wipe();
        get Paths(): any;
    };
}