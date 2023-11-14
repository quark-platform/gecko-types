declare module "resource://gre/modules/GeckoViewPrompt.sys.mjs" {
    export class PromptFactory {
        constructor();
        handleEvent(aEvent?);
        _handleClick(aEvent?);
        _generateSelectItems(aElement?);
        _handleSelect(aElement?, aIsDropDown?);
        _handleDateTime(aElement?);
        _dispatchEvents(aElement?);
        _handlePopupBlocked(aEvent?);
        getPrompt(aDOMWin?, aIID?);
        callProxy(aMethod?, aArguments?);
        alert();
        alertBC();
        alertCheck();
        alertCheckBC();
        confirm();
        confirmBC();
        confirmCheck();
        confirmCheckBC();
        confirmEx();
        confirmExBC();
        prompt();
        promptBC();
        promptUsernameAndPassword();
        promptUsernameAndPasswordBC();
        promptPassword();
        promptPasswordBC();
        select();
        selectBC();
        promptAuth();
        promptAuthBC();
        asyncPromptAuth();
    }
}