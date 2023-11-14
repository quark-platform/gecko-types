declare module "resource://gre/modules/subprocess/subprocess_common.sys.mjs" {
    var SubprocessConstants;
    export class PromiseWorker extends ChromeWorker {
        constructor(url);
        onClose();
        shutdown();
        addListener(msg?, listener?);
        removeListener(msg?, listener?);
        onmessage(event?);
        onFailure();
        onSuccess();
        onDebug();
        call(method?, args?);
    }
    export class BaseProcess {
        constructor(worker, processId, fds, pid);
        create(options?);
        get WORKER_URL();
        get WorkerClass();
        getWorker();
        kill();
        wait();
    }
}