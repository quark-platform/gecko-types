declare module "resource://gre/modules/ManifestProcessor.sys.mjs" {
    export var ManifestProcessor: {
        get defaultDisplayMode(): any;
        get displayModes(): any;
        get orientationTypes(): any;
        get textDirections(): any;
        process(aOptions?);
    };
}