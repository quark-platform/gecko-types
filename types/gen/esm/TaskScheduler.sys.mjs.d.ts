declare module "resource://gre/modules/TaskScheduler.sys.mjs" {
    export var TaskScheduler: {
        MIN_INTERVAL_SECONDS: number;
        registerTask(id?, command?, intervalSeconds?, options?);
        deleteTask(id?);
        deleteAllTasks();
        taskExists(id?);
    };
}