declare module "resource://app/modules/ProvenanceData.sys.mjs" {
    var ProvenanceData: {
        _clearCache();
        get zoneIdProvenanceFile(): any;
        readZoneIdProvenanceFile();
        submitProvenanceTelemetry();
    };
}