declare module "resource://gre/modules/txEXSLTRegExFunctions.sys.mjs" {
    export function match(str?, regex?, flags?, doc?);
    export function replace(str?, regex?, flags?, replace?);
    export function test(str?, regex?, flags?);
}