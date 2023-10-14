declare module "resource://gre/modules/LoginManagerPrompter.sys.mjs" {
    export class LoginManagerPrompter {
        get classID();
        get QueryInterface();
        promptToSavePassword();
        _showLoginCaptureDoorhanger();
        promptToChangePassword();
        promptToChangePasswordWithUsernames();
        _updateLogin();
        _getLocalizedString();
        _getShortDisplayHost();
        _filterUpdatableLogins();
        _setUsernameAutocomplete();
        _getUsernameSuggestions();
    }
}