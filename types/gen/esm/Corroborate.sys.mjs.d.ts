declare module "resource://gre/modules/Corroborate.sys.mjs" {
    export var Corroborate: {
        init();
        verifyJar(file?);
    };
}