declare module "resource://gre/modules/FillHelpers.sys.mjs" {
    export class GenericAutocompleteItem {
        constructor(icon, title, subtitle, fillMessageName, fillMessageData);
        comment;
        style;
        value;
    }
    export function showConfirmation(browser?, messageId?, anchorId?);
}