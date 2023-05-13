declare module "resource://app/modules/DoHHeuristics.sys.mjs" {
    var Heuristics: {
        ENABLE_DOH;
        DISABLE_DOH;
        run();
        checkEnterprisePolicy();
        _setMockLinkService(mockLinkService);
        heuristicNameToSkipReason(heuristicName);
    };
    function parentalControls();
}