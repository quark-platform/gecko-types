declare module "resource://gre/modules/policies/macOSPoliciesParser.sys.mjs" {
    export var macOSPoliciesParser: {
        readPolicies(reader?);
        removeUnknownPolicies(policies?);
        unflatten(input?, delimiter?);
    };
}