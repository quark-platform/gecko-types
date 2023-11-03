declare module "resource://gre/modules/AsanReporter.sys.mjs" {
    var AsanReporter: {
        init();
        observe(aSubject?, aTopic?, aData?);
    };
}