declare module "resource://app/modules/ProvenanceData.sys.mjs" {
    export var ProvenanceData: {
        _clearCache();
        get zoneIdProvenanceFile(): any;
        readZoneIdProvenanceFile();
        submitProvenanceTelemetry();
    };
}