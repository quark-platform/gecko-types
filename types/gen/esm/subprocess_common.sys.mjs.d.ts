declare module "resource://gre/modules/subprocess/subprocess_common.sys.mjs" {
    var SubprocessConstants;
    export class PromiseWorker {
        constructor(url);
        onClose();
        shutdown();
        addListener();
        removeListener();
        onmessage();
        onFailure();
        onSuccess();
        onDebug();
        call();
    }
    export class BaseProcess {
        constructor(worker, processId, fds, pid);
        create();
        get WORKER_URL();
        get WorkerClass();
        getWorker();
        kill();
        wait();
    }
}