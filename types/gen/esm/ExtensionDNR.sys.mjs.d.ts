declare module "resource://gre/modules/ExtensionDNR.sys.mjs" {
    export var ExtensionDNR: {
        RuleValidator;
        RuleQuotaCounter;
        clearRuleManager;
        ensureInitialized;
        getMatchedRulesForRequest;
        getRuleManager;
        updateDynamicRules;
        updateEnabledStaticRulesets;
        validateManifestEntry;
        beforeWebRequestEvent;
        handleRequest;
    };
}