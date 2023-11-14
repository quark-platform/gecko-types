declare module "resource://app/modules/HeadlessShell.sys.mjs" {
    export class ScreenshotParent extends JSWindowActorParent {
        getDimensions();
    }
    var HeadlessShell: {
        handleCmdLineArgs(cmdLine?, URLlist?);
    };
}