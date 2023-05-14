declare module "resource://gre/modules/components-utils/WindowsVersionInfo.sys.mjs" {
    var WindowsVersionInfo: {
        UNKNOWN_VERSION_INFO: {
            servicePackMajor;
            servicePackMinor;
            buildNumber;
        };
        get();
        CannotOpenKernelError;
        GetVersionExError;
        NotWindowsError;
    };
}