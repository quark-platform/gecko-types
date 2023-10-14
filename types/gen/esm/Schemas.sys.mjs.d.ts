declare module "resource://gre/modules/Schemas.sys.mjs" {
    var Schemas;
    export class SchemaRoot {
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