declare module "resource://gre/modules/services-settings/RemoteSettingsClient.sys.mjs" {
    export class RemoteSettingsClient {
        get DEFAULT_SUGGESTION_SCORE();
        constructor();
        get shouldEnable();
        get enablingPreferences();
        get emitter();
        get readyPromise();
        get config();
        enable();
        fetch();
        getFullKeyword();
        get _test_rs();
        get _test_resultsByKeyword();
        _test_setConfig();
        _test_addResults();
    }
}