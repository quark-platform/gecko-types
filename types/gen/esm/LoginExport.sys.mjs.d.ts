declare module "resource://gre/modules/LoginExport.sys.mjs" {
    export class LoginExport {
        _buildCSVRow(login?, columns?);
        exportAsCSV(path?, param1?);
    }
}