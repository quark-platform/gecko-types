declare module "resource://app/modules/HeadlessShell.sys.mjs" {
    export class ScreenshotParent {
        getDimensions();
    }
    var HeadlessShell: {
        handleCmdLineArgs(cmdLine, URLlist);
    };
}