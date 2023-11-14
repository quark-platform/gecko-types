declare module "resource://gre/modules/PlacesDBUtils.sys.mjs" {
    export var PlacesDBUtils: {
        _isShuttingDown;
        _clearTaskQueue;
        clearPendingTasks();
        maintenanceOnIdle();
        checkAndFixDatabase();
        _refreshUI();
        checkIntegrity();
        checkCoherence();
        incrementalVacuum();
        deleteOrphanPreviews();
        _getCoherenceStatements();
        vacuum();
        expire();
        stats();
        telemetry();
        removeOldCorruptDBs();
        getEntitiesStats();
        getEntitiesStatsAndCounts();
        runTasks(tasks?);
    };
    export function PlacesDBUtilsIdleMaintenance();
}