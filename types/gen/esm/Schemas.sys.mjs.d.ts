declare module "resource://gre/modules/Schemas.sys.mjs" {
    export var Schemas;
    export class SchemaRoot extends Namespace {
        constructor(base, schemaJSON);
        getNamespaces(path?);
        getNamespace(name?, param1?);
        getOwnNamespace(name?);
        parseSchema(schema?, path?, param2?);
        parseSchemas();
        loadSchema(json?);
        checkPermissions(namespace?, wrapperFuncs?);
        inject(dest?, wrapperFuncs?);
        injectInto(dest?, context?);
        normalize(obj?, typeName?, context?);
    }
}