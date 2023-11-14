declare module "resource://gre/modules/CookieBannerListService.sys.mjs" {
    export class CookieBannerListService {
        constructor();
        init();
        initForTest();
        importAllRules();
        shutdown();
        onSync();
        observe(subject?, topic?, prefName?);
    }
}