declare module "resource://app/modules/HeadlessShell.sys.mjs" {export class ScreenshotParent extends JSWindowActorParent {
    getDimensions(params: any): Promise<any>;
}
export namespace HeadlessShell {
    function handleCmdLineArgs(cmdLine: any, URLlist: any): Promise<void>;
}
}