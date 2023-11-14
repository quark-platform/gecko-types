declare module "resource://gre/modules/FinderIterator.sys.mjs" {
    export class FinderIterator {
        constructor();
        get kIterationSizeMax();
        get params();
        start(param0?);
        stop(param0?);
        restart(finder?);
        reset();
        continueRunning(param0?);
        isAlreadyRunning(paramSet?);
        _notifyListeners(callback?, params?, param2?);
        _previousResultAvailable(param0?);
        _areParamsEqual(paramSet1?, paramSet2?, param2?);
        _yieldResult(listener?, rangeSource?, window?, param3?);
        _yieldPreviousResult(listener?, window?);
        _yieldIntermediateResult(listener?, window?);
        _findAllRanges(finder?, spawnId?);
        _iterateDocument(param0?, window?);
        _collectFrames(window?, finder?);
        _getDocShell(windowOrRange?);
        _rangeStartsInLink(range?);
    }
}