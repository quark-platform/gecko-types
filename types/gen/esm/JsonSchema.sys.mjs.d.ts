declare module "resource://gre/modules/JsonSchema.sys.mjs" {
    export var JsonSchema: {
        Validator;
        validate;
        detectSchemaDraft;
    };
}