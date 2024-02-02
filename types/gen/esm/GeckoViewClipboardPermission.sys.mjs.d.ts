declare module "resource://gre/modules/GeckoViewClipboardPermission.sys.mjs" {export namespace GeckoViewClipboardPermission {
    function confirmUserPaste(aWindowContext: any): Promise<any>;
}
}