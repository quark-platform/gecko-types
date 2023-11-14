declare module "resource://gre/modules/ConduitsChild.sys.mjs" {
    export class BaseConduit {
        constructor(subject, address);
        _send(method?, query?, actor?, data?);
        _recv(name?, arg?, meta?);
    }
    export class ConduitsChild extends JSWindowActorChild {
        constructor();
        openConduit(subject?, address?);
        receiveMessage(param0?);
        didDestroy();
    }
    export class ProcessConduitsChild extends JSProcessActorChild {
        constructor();
        openConduit;
        receiveMessage;
        willDestroy;
        didDestroy;
    }
}