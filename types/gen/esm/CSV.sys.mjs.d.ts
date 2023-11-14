declare module "resource://gre/modules/CSV.sys.mjs" {
    export class CSV {
        parse(text?, delimiter?);
        readCSV(text?, delimiter?);
        mapValuesToRows(values?);
    }
}