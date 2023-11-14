declare module "resource://gre/modules/AsanReporter.sys.mjs" {
    export var AsanReporter: {
        init();
        observe(aSubject?, aTopic?, aData?);
    };
}