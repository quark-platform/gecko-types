declare module "resource://gre/modules/Bits.sys.mjs" {
    export class BitsError extends Error {
        constructor(type, action, stage, codeType, code);
    }
    import type { BitsError } from "resource://gre/modules/Bits.sys.mjs";
    export class BitsVerificationError extends BitsError {
        constructor();
    }
    import type { BitsError } from "resource://gre/modules/Bits.sys.mjs";
    export class BitsUnknownError extends BitsError {
        constructor();
    }
    export class BitsRequest {
        constructor(request);
        shutdown();
        get hasShutdown();
        get name();
        isPending();
        get status();
        cancel();
        suspend();
        resume();
        get loadGroup();
        set loadGroup(group);
        get loadFlags();
        set loadFlags(flags);
        get bitsId();
        get transferError();
        changeMonitorInterval();
        cancelAsync();
        setPriorityHigh();
        setPriorityLow();
        setNoProgressTimeout();
        complete();
        suspendAsync();
        resumeAsync();
    }
    var Bits: {
        get initialized(): any;
        init(jobName?, savePathPrefix?, monitorTimeoutMs?);
        startDownload(downloadURL?, saveRelPath?, proxy?, noProgressTimeoutSecs?, monitorIntervalMs?, observer?, context?);
        monitorDownload(id?, monitorIntervalMs?, observer?, context?);
    };
}