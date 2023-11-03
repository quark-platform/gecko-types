declare module "resource://gre/modules/components-utils/FilterExpressions.sys.mjs" {
    var FilterExpressions: {
        getAvailableTransforms();
        eval(expr?, context?);
    };
}