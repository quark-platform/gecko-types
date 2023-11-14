declare module "resource://gre/modules/PasswordRulesManager.sys.mjs" {
    export class PasswordRulesManagerParent extends JSWindowActorParent {
        initPasswordRulesCollection();
        _transformRulesToMap(rules?);
        generatePassword(uri?, param1?);
    }
}