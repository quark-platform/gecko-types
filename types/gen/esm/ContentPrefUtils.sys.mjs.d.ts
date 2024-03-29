declare module "resource://gre/modules/ContentPrefUtils.sys.mjs" {export function ContentPref(domain: any, name: any, value: any): void;
export class ContentPref {
    constructor(domain: any, name: any, value: any);
    domain: any;
    name: any;
    value: any;
    QueryInterface: MozQueryInterface;
}
export function cbHandleResult(callback: any, pref: any): void;
export function cbHandleCompletion(callback: any, reason: any): void;
export function cbHandleError(callback: any, nsresult: any): void;
export function safeCallback(callbackObj: any, methodName: any, args: any): void;
export const _methodsCallableFromChild: readonly (string | string[])[][];
}