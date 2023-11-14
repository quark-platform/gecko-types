declare module "resource://gre/modules/ConduitsParent.sys.mjs" {
    import type { BaseConduit } from "resource://gre/modules/ConduitsChild.sys.mjs";
    export class BroadcastConduit extends BaseConduit {
        constructor(subject, address);
        _send(method?, query?, target?, param3?);
        _cast(method?, kind?, arg?);
        _raceResponses(promises?);
        close();
    }
    export class ConduitsParent extends JSWindowActorParent {
        constructor();
        batch(name?, data?);
        receiveMessage(param0?);
        didDestroy();
    }
    export class ProcessConduitsParent extends JSProcessActorParent {
    }
}