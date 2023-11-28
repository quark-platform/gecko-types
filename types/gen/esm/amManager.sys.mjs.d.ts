declare module "resource://gre/modules/amManager.sys.mjs" {export function amManager(): void;
export class amManager {
    wrappedJSObject: this;
    observe(aSubject: any, aTopic: any, aData: any): void;
    installAddonFromWebpage(aPayload: any, aBrowser: any, aCallback: any): boolean;
    notify(aTimer: any): void;
    addonListeners: Map<any, any>;
    _addAddonListener(target: any): void;
    _removeAddonListener(target: any): void;
    /**
     * messageManager callback function.
     *
     * Listens to requests from child processes for InstallTrigger
     * activity, and sends back callbacks.
     */
    receiveMessage(aMessage: any): any;
    childClosed(target: any): void;
    sendEvent(mm: any, data: any): void;
    classID: any;
    QueryInterface: any;
}
export function BlocklistService(): void;
export class BlocklistService {
    wrappedJSObject: this;
    STATE_NOT_BLOCKED: any;
    STATE_SOFTBLOCKED: any;
    STATE_BLOCKED: any;
    get isLoaded(): any;
    observe(...args: any[]): any;
    notify(): void;
    classID: any;
    QueryInterface: any;
}
}