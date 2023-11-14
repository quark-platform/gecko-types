declare module "resource://gre/modules/ConduitsChild.sys.mjs" {
    export class BaseConduit {
        constructor(subject, address);
        _send();
        _recv();
    }
    export class ConduitsChild extends JSWindowActorChild {
        constructor();
        openConduit();
        receiveMessage();
        didDestroy();
    }
    export class ProcessConduitsChild extends JSProcessActorChild {
        constructor();
    }
}