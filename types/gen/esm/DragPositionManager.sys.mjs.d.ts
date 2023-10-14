declare module "resource://app/modules/DragPositionManager.sys.mjs" {
    var DragPositionManager: {
        start(aWindow);
        stop();
        getManagerForArea(aArea);
    };
}