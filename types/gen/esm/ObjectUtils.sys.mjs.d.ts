declare module "resource://gre/modules/ObjectUtils.sys.mjs" {
    export var ObjectUtils: {
        deepEqual(a?, b?);
        strict(obj?);
        isEmpty(obj?);
    };
}