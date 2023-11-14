declare module "resource://gre/modules/LayoutUtils.sys.mjs" {
    export var LayoutUtils: {
        getElementBoundingScreenRect(aElement?);
        rectToScreenRect(win?, rect?);
        _rectToClientRect(win?, rect?);
    };
}