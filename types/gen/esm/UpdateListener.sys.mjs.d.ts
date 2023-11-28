declare module "resource://gre/modules/UpdateListener.sys.mjs" {export namespace UpdateListener {
    let timeouts: any[];
    let restartDoorhangerShown: boolean;
    let updateFirstReadyTime: any;
    let promptDelayMsFromBuild: number;
    let promptDelayMsFromUpdate: number;
    let promptMaxFutureVariation: number;
    let latestUpdate: any;
    let availablePromptScheduled: boolean;
    const badgeWaitTime: any;
    const suppressedPromptDelay: number;
    function maybeShowUnsupportedNotification(): void;
    function reset(): void;
    function clearPendingAndActiveNotifications(): void;
    function clearCallbacks(): void;
    function addTimeout(time: any, callback: any): void;
    function requestRestart(): void;
    function openManualUpdateUrl(win: any): void;
    function openUnsupportedUpdateUrl(win: any, detailsURL: any): void;
    function getReleaseNotesUrl(update: any): any;
    function showUpdateNotification(type: any, mainAction: any, mainActionDismiss: any, options?: {}): void;
    function showRestartNotification(update: any, dismissed: any): void;
    function showUpdateAvailableNotification(update: any, dismissed: any): void;
    function showManualUpdateNotification(update: any, dismissed: any): void;
    function showUnsupportedUpdateNotification(update: any, dismissed: any): void;
    function showUpdateDownloadingNotification(): void;
    function scheduleUpdateAvailableNotification(update: any): void;
    function handleUpdateError(update: any, status: any): void;
    function handleUpdateStagedOrDownloaded(update: any, status: any): void;
    function handleUpdateAvailable(update: any, status: any): void;
    function handleUpdateDownloading(status: any): void;
    function handleUpdateSwap(): void;
    function observe(subject: any, topic: any, status: any): void;
}
}