declare module "resource://app/modules/HeadlessShell.sys.mjs" {export class ScreenshotParent {
    getDimensions(params: any): any;
}
export namespace HeadlessShell {
    function handleCmdLineArgs(cmdLine: any, URLlist: any): Promise<void>;
}
}