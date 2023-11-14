declare module "resource://gre/modules/Finder.sys.mjs" {
    export function Finder(docShell?);
    export function GetClipboardSearchString(aLoadContext?);
    export function SetClipboardSearchString(aSearchString?);
}