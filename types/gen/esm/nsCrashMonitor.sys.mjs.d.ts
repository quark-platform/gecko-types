declare module "resource://gre/modules/nsCrashMonitor.sys.mjs" {export function CrashMonitor(): void;
export class CrashMonitor {
    classID: any;
    contractID: string;
    QueryInterface: any;
    observe(aSubject: any, aTopic: any, aData: any): void;
}
}