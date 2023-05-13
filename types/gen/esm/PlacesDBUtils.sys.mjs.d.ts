declare module "resource://gre/modules/PlacesDBUtils.sys.mjs" {
    var PlacesDBUtils: {
        _isShuttingDown;
        _clearTaskQueue;
        clearPendingTasks();
        maintenanceOnIdle();
        checkAndFixDatabase();
        _refreshUI();
        checkIntegrity();
        invalidateCaches();
        checkCoherence();
        incrementalVacuum();
        deleteOrphanPreviews();
        _getCoherenceStatements();
        vacuum();
        expire();
        stats();
        originFrecencyStats();
        telemetry();
        removeOldCorruptDBs();
        getEntitiesStats();
        getEntitiesStatsAndCounts();
        runTasks(tasks);
    };
    function PlacesDBUtilsIdleMaintenance();
}