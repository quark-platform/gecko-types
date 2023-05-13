declare module "resource://gre/modules/FinderIterator.sys.mjs" {
    export class FinderIterator {
        constructor();
        get kIterationSizeMax();
        get params();
        start();
        stop();
        restart();
        reset();
        continueRunning();
        isAlreadyRunning();
        _notifyListeners();
        _previousResultAvailable();
        _areParamsEqual();
        _yieldResult();
        _yieldPreviousResult();
        _yieldIntermediateResult();
        _findAllRanges();
        _iterateDocument();
        _collectFrames();
        _getDocShell();
        _rangeStartsInLink();
    }
}