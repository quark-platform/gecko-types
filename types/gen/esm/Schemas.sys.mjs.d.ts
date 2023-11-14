declare module "resource://gre/modules/Schemas.sys.mjs" {
    var Schemas;
    export class SchemaRoot extends Namespace {
        constructor(base, schemaJSON);
        getNamespaces();
        getNamespace();
        getOwnNamespace();
        parseSchema();
        parseSchemas();
        loadSchema();
        checkPermissions();
        inject();
        injectInto();
        normalize();
    }
}