declare module "resource://gre/modules/TaskScheduler.sys.mjs" {
    var TaskScheduler: {
        MIN_INTERVAL_SECONDS: number;
        registerTask(id?, command?, intervalSeconds?, options?);
        deleteTask(id?);
        deleteAllTasks();
        taskExists(id?);
    };
}