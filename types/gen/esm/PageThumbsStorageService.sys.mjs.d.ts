declare module "resource://gre/modules/PageThumbsStorageService.sys.mjs" {export function PageThumbsStorageService(): void;
export class PageThumbsStorageService {
    classID: unknown;
    QueryInterface: MozQueryInterface;
    _path: null;
    get path(): any;
    getLeafNameForURL(aURL: any): string;
    getFilePathForURL(aURL: any): string;
    _calculateMD5Hash(aValue: any): string;
    _convertToHexString(aData: any): string;
}
}