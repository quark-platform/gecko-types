declare module "resource://app/modules/ESEDBReader.sys.mjs" {
    export var KERNEL: {};
    export var COLUMN_TYPES: {
        JET_coltypBit: number;
        JET_coltypUnsignedByte: number;
        JET_coltypShort: number;
        JET_coltypLong: number;
        JET_coltypCurrency: number;
        JET_coltypIEEESingle: number;
        JET_coltypIEEEDouble: number;
        JET_coltypDateTime: number;
        JET_coltypBinary: number;
        JET_coltypText: number;
        JET_coltypLongBinary: number;
        JET_coltypLongText: number;
        JET_coltypUnsignedLong: number;
        JET_coltypLongLong: number;
        JET_coltypGUID: number;
    };
    export var ESE: {};
    export var gLibs: {};
    export function declareESEFunction(methodName?);
    export function loadLibraries();
    export var ESEDBReader: {
        openDB(rootDir?, dbFile?, logDir?);
        dbLocked(dbFile?);
        closeDB(db?);
        COLUMN_TYPES;
    };
}