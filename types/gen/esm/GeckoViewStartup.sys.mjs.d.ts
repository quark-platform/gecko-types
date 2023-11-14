declare module "resource://gre/modules/GeckoViewStartup.sys.mjs" {
    export class GeckoViewStartup {
        observe(aSubject?, aTopic?, aData?);
        onEvent(aEvent?, aData?, aCallback?);
    }
}