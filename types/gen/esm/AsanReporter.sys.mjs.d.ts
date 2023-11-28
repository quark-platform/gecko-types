declare module "resource://gre/modules/AsanReporter.sys.mjs" {export namespace AsanReporter {
    function init(): void;
    function observe(aSubject: any, aTopic: any, aData: any): void;
}
}