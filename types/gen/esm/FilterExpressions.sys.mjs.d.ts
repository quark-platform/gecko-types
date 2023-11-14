declare module "resource://gre/modules/components-utils/FilterExpressions.sys.mjs" {
    export var FilterExpressions: {
        getAvailableTransforms();
        eval(expr?, context?);
    };
}