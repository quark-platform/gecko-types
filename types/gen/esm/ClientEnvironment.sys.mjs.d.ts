declare module "resource://gre/modules/components-utils/ClientEnvironment.sys.mjs" {
    export class ClientEnvironment extends ClientEnvironmentBase {
        getClientClassification();
        clearClassifyCache();
        withMockClassify(data?, testFunction?);
        get userId();
        get country();
        get request_time();
        get experiments();
        get studies();
        get rollouts();
        get isFirstRun();
    }
}