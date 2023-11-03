declare module "resource://gre/modules/FillHelpers.sys.mjs" {
    export class GenericAutocompleteItem {
        constructor(icon, title, subtitle, fillMessageName, fillMessageData);
    }
    function showConfirmation(browser?, messageId?, anchorId?);
}