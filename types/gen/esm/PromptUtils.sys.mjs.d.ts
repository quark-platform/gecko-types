declare module "resource://gre/modules/PromptUtils.sys.mjs" {
    var PromptUtils: {
        fireDialogEvent(domWin, eventName, maybeTarget, detail);
        objectToPropBag(obj);
        propBagToObject(propBag, obj);
    };
    var EnableDelayHelper;
}