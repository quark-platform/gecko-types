declare module "resource://gre/modules/remotepagemanager/RemotePageManagerChild.sys.mjs" {
    export class ChildMessagePort {
        constructor(window);
        handleRequest();
        handleMessage();
        destroy();
    }
}