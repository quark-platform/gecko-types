declare module "resource://app/modules/ExtensionControlledPopup.sys.mjs" {export class ExtensionControlledPopup {
    static _getAndMaybeCreatePanel(doc: any): any;
    constructor(opts: any);
    confirmedType: any;
    observerTopic: any;
    anchorId: any;
    popupnotificationId: any;
    settingType: any;
    settingKey: any;
    descriptionId: any;
    descriptionMessageId: any;
    getLocalizedDescription: any;
    learnMoreLink: any;
    preferencesLocation: any;
    preferencesEntrypoint: any;
    onObserverAdded: any;
    onObserverRemoved: any;
    beforeDisableAddon: any;
    observerRegistered: boolean;
    get topWindow(): mozIDOMWindowProxyType;
    userHasConfirmed(id: any): boolean;
    setConfirmation(id: any): Promise<any>;
    clearConfirmation(id: any): Promise<any>;
    observe(subject: any, topic: any, data: any): void;
    removeObserver(): void;
    addObserver(extensionId: any): Promise<void>;
    open(targetWindow: any, extensionId: any): Promise<void>;
    getAddonDetails(doc: any, addon: any): any;
    populateDescription(doc: any, addon: any): void;
    _ensureWindowReady(win: any): Promise<void>;
}
}