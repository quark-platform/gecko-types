declare module "resource://app/modules/policies/ProxyPolicies.sys.mjs" {export const PROXY_TYPES_MAP: Map<string, any>;
export namespace ProxyPolicies {
    function configureProxySettings(param: any, setPref: any): void;
}
}