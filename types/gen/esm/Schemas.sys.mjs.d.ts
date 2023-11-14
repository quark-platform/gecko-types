declare module "resource://gre/modules/Schemas.sys.mjs" {
    var Schemas;
    export class SchemaRoot extends Namespace {
        constructor(base, schemaJSON);
        getNamespaces(path?);
        getNamespace(name?);
        getOwnNamespace(name?);
        parseSchema(schema?, path?);
        parseSchemas();
        loadSchema(json?);
        checkPermissions(namespace?, wrapperFuncs?);
        inject(dest?, wrapperFuncs?);
        injectInto(dest?, context?);
        normalize(obj?, typeName?, context?);
    }
}