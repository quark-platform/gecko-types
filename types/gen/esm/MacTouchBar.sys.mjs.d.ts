declare module "resource://app/modules/MacTouchBar.sys.mjs" {
    export class TouchBarHelper {
        constructor();
        destructor();
        get activeTitle();
        get allItems();
        get window();
        get document();
        get isUrlbarFocused();
        toggleFocusUrlbar();
        unfocusUrlbar();
        get baseWindow();
        getTouchBarInput(inputName?);
        _updateTouchBarInputs(param0?);
        insertRestrictionInUrlbar(restrictionToken?);
        observe(subject?, topic?, data?);
    }
    export class TouchBarInput {
        constructor(input);
        get key();
        get title();
        set title(title);
        get image();
        set image(image);
        get type();
        set type(type);
        get callback();
        set callback(callback);
        get color();
        set color(color);
        get disabled();
        set disabled(disabled);
        get children();
        _localizeChildren(children?);
    }
}