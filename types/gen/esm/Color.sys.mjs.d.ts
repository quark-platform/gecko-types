declare module "resource://gre/modules/Color.sys.mjs" {
    export class Color {
        constructor(r, g, b);
        get relativeLuminance();
        get useBrightText();
        contrastRatio(otherColor?);
        isContrastRatioAcceptable(otherColor?, param1?);
    }
}