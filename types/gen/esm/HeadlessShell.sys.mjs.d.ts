declare module "resource://app/modules/HeadlessShell.sys.mjs" {
    export class ScreenshotParent extends JSWindowActorParent {
        getDimensions(params?);
    }
    var HeadlessShell: {
        handleCmdLineArgs(cmdLine?, URLlist?);
    };
}