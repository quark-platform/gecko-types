declare module "resource://gre/modules/ManifestProcessor.sys.mjs" {export namespace ManifestProcessor {
    const defaultDisplayMode: string;
    const displayModes: Set<string>;
    const orientationTypes: Set<string>;
    const textDirections: Set<string>;
    function process(aOptions: any): {
        dir: any;
        lang: any;
        start_url: string;
        display: any;
        orientation: any;
        name: any;
        icons: any[];
        short_name: any;
        theme_color: string;
        background_color: string;
    };
}
}