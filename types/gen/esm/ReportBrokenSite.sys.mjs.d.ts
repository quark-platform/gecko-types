declare module "resource://app/modules/ReportBrokenSite.sys.mjs" {export const ReportBrokenSite: {
    "__#566588@#newReportEndpoint": any;
    readonly sendMoreInfoEndpoint: any;
    "__#566588@#_enabled": boolean;
    readonly enabled: boolean;
    "__#566588@#reasonEnabled": boolean;
    "__#566588@#reasonIsOptional": boolean;
    "__#566588@#descriptionIsOptional": boolean;
    "__#566588@#sendMoreInfoEnabled": boolean;
    readonly reasonEnabled: boolean;
    readonly reasonIsOptional: boolean;
    readonly descriptionIsOptional: boolean;
    canReportURI(uri: any): any;
    "__#566588@#recordGleanEvent"(name: any, extra: any): void;
    updateParentMenu(event: any): void;
    init(tabbrowser: any): void;
    enableOrDisableMenuitems(selectedbrowser: any): void;
    "__#566588@#checkPrefs"(whichChanged: any): void;
    "__#566588@#initMainView"(state: any): void;
    "__#566588@#initReportSentView"(state: any): void;
    "__#566588@#onMainViewShown"(source: any, selectedBrowser: any): Promise<void>;
    "__#566588@#queryActor"(msg: any, params: any, browser: any): Promise<any>;
    "__#566588@#loadTab"(tabbrowser: any, url: any, triggeringPrincipal: any): Promise<any>;
    "__#566588@#openWebCompatTab"(tabbrowser: any): Promise<any>;
    "__#566588@#sendReportAsGleanPing"({ currentTabWebcompatDetailsPromise, description, reason, url, }: {
        currentTabWebcompatDetailsPromise: any;
        description: any;
        reason: any;
        url: any;
    }): Promise<void>;
    open(event: any): void;
};
}