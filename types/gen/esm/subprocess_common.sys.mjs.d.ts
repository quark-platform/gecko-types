declare module "resource://gre/modules/subprocess/subprocess_common.sys.mjs" {
    export var SubprocessConstants;
    export class PromiseWorker extends ChromeWorker {
        constructor(url);
        onClose();
        shutdown();
        addListener(msg?, listener?);
        removeListener(msg?, listener?);
        onmessage(event?);
        onFailure(param0?);
        onSuccess(param0?);
        onDebug(param0?);
        call(method?, args?, param2?);
    }
    export class BaseProcess {
        constructor(worker, processId, fds, pid);
        create(options?);
        get WORKER_URL();
        get WorkerClass();
        getWorker();
        kill(param0?);
        wait();
    }
}