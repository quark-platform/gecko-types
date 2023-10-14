declare module "resource://gre/modules/ConduitsParent.sys.mjs" {
    export class BroadcastConduit {
        constructor(subject, address);
        _send();
        _cast();
        _raceResponses();
        close();
    }
    export class ConduitsParent {
        constructor();
        batch();
        receiveMessage();
        didDestroy();
    }
    export class ProcessConduitsParent {
    }
}