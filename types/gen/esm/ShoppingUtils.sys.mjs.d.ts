declare module "resource://app/modules/ShoppingUtils.sys.mjs" {
    var ShoppingUtils: {
        initialized;
        registered;
        onNimbusUpdate();
        init();
        uninit();
        setOnUpdate(_pref, _prev, current);
    };
}