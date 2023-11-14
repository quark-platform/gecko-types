declare module "resource://gre/modules/LoginManagerPrompter.sys.mjs" {
    export class LoginManagerPrompter {
        get classID();
        get QueryInterface();
        promptToSavePassword(aBrowser?, aLogin?, param2?, param3?, param4?, param5?);
        _showLoginCaptureDoorhanger(browser?, login?, type?, param3?, param4?, param5?);
        promptToChangePassword(aBrowser?, aOldLogin?, aNewLogin?, param3?, param4?, param5?, param6?, param7?);
        promptToChangePasswordWithUsernames(browser?, logins?, aNewLogin?);
        _updateLogin(login?, aNewLogin?);
        _getLocalizedString(key?, formatArgs?);
        _getShortDisplayHost(aURIString?);
        _filterUpdatableLogins(aLogin?, aLoginList?, includeGUID?);
        _setUsernameAutocomplete(login?, param1?);
        _getUsernameSuggestions(login?, param1?);
    }
}