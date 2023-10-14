declare module "resource://gre/modules/PasswordRulesManager.sys.mjs" {
    export class PasswordRulesManagerParent {
        initPasswordRulesCollection();
        _transformRulesToMap();
        generatePassword();
    }
}