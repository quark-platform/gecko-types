declare module "resource://gre/modules/GeckoViewPrompter.sys.mjs" {
    export class GeckoViewPrompter {
        constructor(aParent);
        get domWin();
        get prompterActor();
        _changeModalState();
        _dismissUi();
        accept();
        dismiss();
        getPromptType();
        getPromptText();
        getInputText();
        setInputText();
        showPrompt();
        checkInnerWindow();
        asyncShowPromptPromise();
        asyncShowPrompt();
        update();
    }
}