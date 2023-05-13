declare module "resource://gre/modules/FindBarContent.sys.mjs" {
    export class FindBarContent {
        constructor(actor);
        start();
        startQuickFind();
        updateState();
        handleEvent();
        onKeypress();
        passKeyToParent();
        onMouseup();
    }
}