declare module "resource://gre/modules/Subprocess.sys.mjs" {
    export var Subprocess: {
        call(options?);
        getEnvironment();
        pathSearch(command?, environment?);
    };
    export function getSubprocessImplForTest();
}