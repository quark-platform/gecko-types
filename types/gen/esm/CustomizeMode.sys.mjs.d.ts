declare module "resource://app/modules/CustomizeMode.sys.mjs" {
    var CustomizeMode: {
        init(libDir);
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