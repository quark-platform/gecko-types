declare module "resource://gre/modules/ExtensionDNR.sys.mjs" {
    var ExtensionDNR: {
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