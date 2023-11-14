declare module "resource://gre/modules/FinderIterator.sys.mjs" {
    export class FinderIterator {
        constructor();
        get kIterationSizeMax();
        get params();
        start();
        stop();
        restart(finder?);
        reset();
        continueRunning();
        isAlreadyRunning(paramSet?);
        _notifyListeners(callback?, params?);
        _previousResultAvailable();
        _areParamsEqual(paramSet1?, paramSet2?);
        _yieldResult(listener?, rangeSource?, window?);
        _yieldPreviousResult(listener?, window?);
        _yieldIntermediateResult(listener?, window?);
        _findAllRanges(finder?, spawnId?);
        _iterateDocument(window?);
        _collectFrames(window?, finder?);
        _getDocShell(windowOrRange?);
        _rangeStartsInLink(range?);
    }
}