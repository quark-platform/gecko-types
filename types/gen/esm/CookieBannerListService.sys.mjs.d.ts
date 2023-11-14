declare module "resource://gre/modules/CookieBannerListService.sys.mjs" {
    export class CookieBannerListService {
        constructor();
        init();
        initForTest();
        importAllRules();
        shutdown();
        onSync(param0?);
        observe(subject?, topic?, prefName?);
    }
}