declare module "resource://gre/modules/ConduitsParent.sys.mjs" {
    import type { BaseConduit } from "resource://gre/modules/ConduitsChild.sys.mjs";
    export class BroadcastConduit extends BaseConduit {
        constructor(subject, address);
        _send();
        _cast();
        _raceResponses();
        close();
    }
    export class ConduitsParent extends JSWindowActorParent {
        constructor();
        batch();
        receiveMessage();
        didDestroy();
    }
    export class ProcessConduitsParent extends JSProcessActorParent {
    }
}