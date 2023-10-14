declare module "resource://gre/modules/ManifestProcessor.sys.mjs" {
    var ManifestProcessor: {
        get defaultDisplayMode(): any;
        get displayModes(): any;
        get orientationTypes(): any;
        get textDirections(): any;
        process(aOptions);
    };
}