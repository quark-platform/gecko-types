declare module "resource://app/modules/policies/ProxyPolicies.sys.mjs" {
    export var PROXY_TYPES_MAP;
    export var ProxyPolicies: {
        configureProxySettings(param?, setPref?);
    };
}