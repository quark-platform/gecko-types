declare module "resource://app/modules/DoHHeuristics.sys.mjs" {
    export var Heuristics: {
        ENABLE_DOH;
        DISABLE_DOH;
        run();
        checkEnterprisePolicy();
        _setMockLinkService(mockLinkService?);
        heuristicNameToSkipReason(heuristicName?);
        Telemetry: {
            incomplete: number;
            pass: number;
            optOut: number;
            manuallyDisabled: number;
            manuallyEnabled: number;
            enterpriseDisabled: number;
            enterprisePresent: number;
            enterpriseEnabled: number;
            vpn: number;
            proxy: number;
            nrpt: number;
            browserParent: number;
            modifiedRoots: number;
            thirdPartyRoots: number;
            google: number;
            youtube: number;
            zscalerCanary: number;
            canary: number;
            ignored: number;
            heuristicNames();
            fromResults(results?);
        };
    };
    export function parentalControls();
}