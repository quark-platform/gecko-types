declare module "resource://gre/modules/GeckoViewPrompt.sys.mjs" {export class PromptFactory {
    wrappedJSObject: this;
    handleEvent(aEvent: any): void;
    _handleClick(aEvent: any): void;
    _generateSelectItems(aElement: any): {}[];
    _handleSelect(aElement: any, aIsDropDown: any): void;
    _handleDateTime(aElement: any): void;
    _dispatchEvents(aElement: any): void;
    _handlePopupBlocked(aEvent: any): void;
    getPrompt(aDOMWin: any, aIID: any): any;
    callProxy(aMethod: any, aArguments: any): any;
    alert(...args: any[]): any;
    alertBC(...args: any[]): any;
    alertCheck(...args: any[]): any;
    alertCheckBC(...args: any[]): any;
    confirm(...args: any[]): any;
    confirmBC(...args: any[]): any;
    confirmCheck(...args: any[]): any;
    confirmCheckBC(...args: any[]): any;
    confirmEx(...args: any[]): any;
    confirmExBC(...args: any[]): any;
    prompt(...args: any[]): any;
    promptBC(...args: any[]): any;
    promptUsernameAndPassword(...args: any[]): any;
    promptUsernameAndPasswordBC(...args: any[]): any;
    promptPassword(...args: any[]): any;
    promptPasswordBC(...args: any[]): any;
    select(...args: any[]): any;
    selectBC(...args: any[]): any;
    promptAuth(...args: any[]): any;
    promptAuthBC(...args: any[]): any;
    asyncPromptAuth(...args: any[]): any;
    confirmUserPaste(...args: any[]): any;
    classID: unknown;
    QueryInterface: MozQueryInterface;
}
}