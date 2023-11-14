declare module "resource://app/modules/ShoppingUtils.sys.mjs" {
    export var ShoppingUtils: {
        initialized;
        registered;
        handledAutoActivate;
        nimbusEnabled;
        nimbusControl;
        _updateNimbusVariables();
        onNimbusUpdate();
        init();
        uninit();
        isProductPageNavigation(aLocationURI?, aFlags?);
        maybeRecordExposure(aLocationURI?, aFlags?);
        setOnUpdate(_pref?, _prev?, current?);
        handleAutoActivateOnProduct();
        sendTrigger(trigger?);
    };
}