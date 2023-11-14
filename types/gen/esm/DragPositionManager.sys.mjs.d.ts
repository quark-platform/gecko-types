declare module "resource://app/modules/DragPositionManager.sys.mjs" {
    export var DragPositionManager: {
        start(aWindow?);
        stop();
        getManagerForArea(aArea?);
    };
}