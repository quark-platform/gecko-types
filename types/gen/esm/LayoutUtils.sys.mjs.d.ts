declare module "resource://gre/modules/LayoutUtils.sys.mjs" {
    var LayoutUtils: {
        getElementBoundingScreenRect(aElement);
        rectToScreenRect(win, rect);
        _rectToClientRect(win, rect);
    };
}