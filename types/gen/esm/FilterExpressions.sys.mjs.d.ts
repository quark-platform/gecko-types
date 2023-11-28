declare module "resource://gre/modules/components-utils/FilterExpressions.sys.mjs" {export namespace FilterExpressions {
    function getAvailableTransforms(): string[];
    function eval(expr: any, context?: {}): any;
}
}