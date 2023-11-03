declare module "resource://gre/modules/TaskSchedulerWinImpl.sys.mjs" {
    var WinImpl: {
        registerTask(id?, command?, intervalSeconds?, options?);
        deleteTask(id?);
        deleteAllTasks();
        taskExists(id?);
        _formatTaskDefinitionXML(command?, intervalSeconds?, options?);
        _createFolderIfNonexistent();
        _deleteFolderIfEmpty();
        _quoteString(str?);
        _taskFolderName();
        _taskFolderNameParts();
        _formatTaskName(id?);
        _matchAppTaskName(name?);
    };
}