declare module "resource://gre/modules/policies/macOSPoliciesParser.sys.mjs" {export namespace macOSPoliciesParser {
    function readPolicies(reader: any): any;
    function removeUnknownPolicies(policies: any): any;
    function unflatten(input: any, delimiter?: string): {};
}
}