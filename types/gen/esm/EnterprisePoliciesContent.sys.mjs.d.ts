declare module "resource://gre/modules/EnterprisePoliciesContent.sys.mjs" {export class EnterprisePoliciesManagerContent {
    get status(): any;
    isAllowed(feature: any): boolean;
    QueryInterface: any;
}
}