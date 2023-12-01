declare module "resource://gre/modules/ColorPickerDelegate.sys.mjs" {export class ColorPickerDelegate {
    init(aParent: any, aTitle: any, aInitialColor: any, aDefaultColors: any): void;
    _prompt: any;
    _msg: {
        type: string;
        title: any;
        value: any;
        predefinedValues: any;
    };
    open(aColorPickerShownCallback: any): void;
    QueryInterface: MozQueryInterface;
}
}