declare module "resource://gre/modules/LoginManagerPrompter.sys.mjs" {
    export class LoginManagerPrompter {
        get classID();
        get QueryInterface();
        promptToSavePassword(aBrowser?, aLogin?);
        _showLoginCaptureDoorhanger(browser?, login?, type?);
        promptToChangePassword(aBrowser?, aOldLogin?, aNewLogin?);
        promptToChangePasswordWithUsernames(browser?, logins?, aNewLogin?);
        _updateLogin(login?, aNewLogin?);
        _getLocalizedString(key?, formatArgs?);
        _getShortDisplayHost(aURIString?);
        _filterUpdatableLogins(aLogin?, aLoginList?, includeGUID?);
        _setUsernameAutocomplete(login?);
        _getUsernameSuggestions(login?);
    }
}