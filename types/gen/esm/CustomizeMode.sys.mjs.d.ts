declare module "resource://app/modules/CustomizeMode.sys.mjs" {
    export var CustomizeMode: {
        init(libDir?);
        configurations: {
            notCustomizing: {
                selectors;
                applyConfig();
            };
            customizing: {
                selectors;
                applyConfig();
            };
        };
    };
}