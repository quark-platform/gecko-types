declare module "resource://gre/modules/LoginStorageDelegate.sys.mjs" {
    export class LoginStorageDelegate {
        _createMessage(aLogins?);
        promptToSavePassword(aBrowser?, aLogin?);
        promptToChangePassword(aBrowser?, aOldLogin?, aNewLogin?);
        promptToChangePasswordWithUsernames(aBrowser?, aLogins?, aNewLogin?);
    }
}