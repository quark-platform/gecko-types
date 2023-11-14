declare module "resource://gre/modules/FindBarContent.sys.mjs" {
    export class FindBarContent {
        constructor(actor);
        start(event?);
        startQuickFind(event?);
        updateState(data?);
        handleEvent(event?);
        onKeypress(event?);
        passKeyToParent(event?);
        onMouseup(event?);
    }
}