declare module "resource://gre/modules/TaskSchedulerMacOSImpl.sys.mjs" {
    var MacOSImpl: {
        registerTask(id, command, intervalSeconds, options);
        deleteTask(id);
        _deleteTaskByLabel(label);
        _listAllLabelsForThisApp();
        deleteAllTasks();
        taskExists(id);
        _toLaunchdPlist(options);
        _formatLaunchdPlist(options);
        _formatLabelForThisApp(id);
        _labelMatchesThisApp(label);
        _formatPlistPath(label);
        _cachedUid;
        _uid();
    };
}