declare module "resource://gre/modules/components-utils/JsonSchemaValidator.sys.mjs" {
    export class JsonSchemaValidator {
        validate(value?, schema?, param2?);
        constructor(param0);
        validate(value?, schema?);
        _validateRecursive(param?, properties?, keyPath?, state?);
        _validateSimpleParam(param?, type?, keyPath?, state?);
    }
}