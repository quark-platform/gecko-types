declare module "resource://app/modules/DragPositionManager.sys.mjs" {export namespace DragPositionManager {
    function start(aWindow: any): void;
    function stop(): void;
    function getManagerForArea(aArea: any): any;
}
}