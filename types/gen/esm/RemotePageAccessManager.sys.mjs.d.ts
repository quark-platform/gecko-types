declare module "resource://gre/modules/RemotePageAccessManager.sys.mjs" {
    export var RemotePageAccessManager: {
        accessMap: {};
        checkAllowAccess(aDocument?, aFeature?, aValue?);
        checkAllowAccessWithPrincipal(aPrincipal?, aFeature?, aValue?, aDocument?);
        checkAllowAccessToFeature(aPrincipal?, aFeature?, aDocument?);
        addPage(aUrl?, aFunctionMap?);
    };
}