declare module "resource://app/modules/sessionstore/TabAttributes.sys.mjs" {export const TabAttributes: Readonly<{
    persist(name: any): boolean;
    get(tab: any): {};
    set(tab: any, data?: {}): void;
}>;
}