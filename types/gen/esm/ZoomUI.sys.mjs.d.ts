declare module "resource://app/modules/ZoomUI.sys.mjs" {export namespace ZoomUI {
    function init(aWindow: any): void;
    /**
     * Gets the global browser.content.full-zoom content preference.
     *
     * @returns Promise<prefValue>
     *                  Resolves to the preference value (float) when done.
     */
    function getGlobalValue(): Promise<any>;
}
}