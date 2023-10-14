declare module "resource://gre/modules/components-utils/ClientEnvironment.sys.mjs" {
    export class ClientEnvironment {
        getClientClassification();
        clearClassifyCache();
        withMockClassify();
        get userId();
        get country();
        get request_time();
        get experiments();
        get studies();
        get rollouts();
        get isFirstRun();
    }
}