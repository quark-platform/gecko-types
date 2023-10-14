declare module "resource://app/modules/DoHController.sys.mjs" {
    var DoHController: {
        _heuristicsAreEnabled;
        init();
        _uninit();
        resetPromise;
        reset();
        maybeEnableHeuristics();
        _runsWhileThrottling: number;
        _wasThrottleExtended;
        _throttleHeuristics();
        _handleThrottleTimeout();
        runHeuristicsThrottled(evaluateReason);
        runHeuristics(evaluateReason);
        setState(state);
        disableHeuristics(state);
        rollback();
        runTRRSelection();
        runTRRSelectionDryRun();
        observe(subject, topic, data);
        setHeuristicResult(skipReason);
        onPrefChanged(pref);
        _debounceTimer;
        _cancelDebounce();
        _lastDebounceTimestamp: number;
        onConnectionChanged();
        onConnectionChangedDebounced();
        onConnectivityAvailable();
    };
}