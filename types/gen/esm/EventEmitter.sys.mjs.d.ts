declare module "resource://app/modules/syncedtabs/EventEmitter.sys.mjs" {export function EventEmitter(): {
    emit(eventName: any, event: any): void;
    on(eventName: any, callback: any): void;
    off(eventName: any, callback: any): void;
    once(eventName: any, callback: any): void;
};
}