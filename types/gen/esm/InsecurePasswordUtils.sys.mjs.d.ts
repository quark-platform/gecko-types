declare module "resource://gre/modules/InsecurePasswordUtils.sys.mjs" {
    export var InsecurePasswordUtils: {
        _formRootsWarned;
        _getInnerWindowId(window?);
        _sendWebConsoleMessage(messageTag?, domDoc?);
        _checkFormSecurity(aForm?);
        _isPrincipalForLocalIPAddress(aPrincipal?);
        isFormSecure(aForm?);
        reportInsecurePasswords(aForm?);
    };
}