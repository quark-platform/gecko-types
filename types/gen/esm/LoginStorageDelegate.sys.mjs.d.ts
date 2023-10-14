declare module "resource://gre/modules/LoginStorageDelegate.sys.mjs" {
    export class LoginStorageDelegate {
        _createMessage();
        promptToSavePassword();
        promptToChangePassword();
        promptToChangePasswordWithUsernames();
    }
}