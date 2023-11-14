declare module "resource://gre/modules/LoginStorageDelegate.sys.mjs" {
    export class LoginStorageDelegate {
        _createMessage(param0?, aLogins?);
        promptToSavePassword(aBrowser?, aLogin?, param2?, param3?);
        promptToChangePassword(aBrowser?, aOldLogin?, aNewLogin?, param3?, param4?, param5?);
        promptToChangePasswordWithUsernames(aBrowser?, aLogins?, aNewLogin?);
    }
}