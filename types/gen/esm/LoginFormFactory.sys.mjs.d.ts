declare module "resource://gre/modules/LoginFormFactory.sys.mjs" {
    var LoginFormFactory: {
        _loginFormsByRootElement;
        _loginFormRootElementsByDocument;
        createFromForm(aForm?);
        createFromField(aField?);
        getRootElementsWeakSetForDocument(aDocument?);
        getForRootElement(aRootElement?);
        setForRootElement(aRootElement?, aLoginForm?);
    };
}