declare module "resource://gre/modules/GeckoViewPrompter.sys.mjs" {
    export class GeckoViewPrompter {
        constructor(aParent);
        get domWin();
        get prompterActor();
        _changeModalState(aEntering?);
        _dismissUi();
        accept();
        dismiss();
        getPromptType();
        getPromptText();
        getInputText();
        setInputText(aInput?);
        showPrompt(aMsg?);
        checkInnerWindow();
        asyncShowPromptPromise(aMsg?);
        asyncShowPrompt(aMsg?, aCallback?);
        update(aMsg?);
    }
}