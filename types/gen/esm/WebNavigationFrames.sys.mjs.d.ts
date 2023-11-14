declare module "resource://gre/modules/WebNavigationFrames.sys.mjs" {
    export var WebNavigationFrames: {
        getFrame(bc?, frameId?);
        getFrameId;
        getParentFrameId;
        getAllFrames(bc?);
        getFromWindow(target?);
    };
}