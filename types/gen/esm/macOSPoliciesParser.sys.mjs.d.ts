declare module "resource://gre/modules/policies/macOSPoliciesParser.sys.mjs" {
    var macOSPoliciesParser: {
        readPolicies(reader?);
        removeUnknownPolicies(policies?);
        unflatten(input?, delimiter?);
    };
}