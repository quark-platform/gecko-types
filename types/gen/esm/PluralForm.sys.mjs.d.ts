declare module "resource://gre/modules/PluralForm.sys.mjs" {
    var PluralForm: {
        get get(): any;
        makeGetter(aRuleNum);
        get numForms(): any;
        get ruleNum(): any;
    };
}