declare module "resource://app/modules/Discovery.sys.mjs" {export namespace Discovery {
    let enabled: any;
    function reset(): Promise<void>;
    function update(): Promise<void>;
}
}