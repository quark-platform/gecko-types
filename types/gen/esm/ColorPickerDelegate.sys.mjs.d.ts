declare module "resource://gre/modules/ColorPickerDelegate.sys.mjs" {
    export class ColorPickerDelegate {
        init(aParent?, aTitle?, aInitialColor?, aDefaultColors?);
        open(aColorPickerShownCallback?);
    }
}