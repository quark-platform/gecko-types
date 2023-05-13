declare module "resource://gre/modules/Subprocess.sys.mjs" {
    var Subprocess: {
        call(options);
        getEnvironment();
        pathSearch(command);
    };
    function getSubprocessImplForTest();
}