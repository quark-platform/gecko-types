declare module "resource://gre/modules/PromptUtils.sys.mjs" {
    export var PromptUtils: {
        fireDialogEvent(domWin?, eventName?, maybeTarget?, detail?);
        objectToPropBag(obj?);
        propBagToObject(propBag?, obj?);
    };
    export var EnableDelayHelper;
}