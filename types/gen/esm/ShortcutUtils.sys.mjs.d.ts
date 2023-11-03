declare module "resource://gre/modules/ShortcutUtils.sys.mjs" {
    var ShortcutUtils: {
        IS_VALID;
        INVALID_KEY;
        INVALID_MODIFIER;
        INVALID_COMBINATION;
        DUPLICATE_MODIFIER;
        MODIFIER_REQUIRED;
        CLOSE_TAB;
        CYCLE_TABS;
        TOGGLE_CARET_BROWSING;
        MOVE_TAB_BACKWARD;
        MOVE_TAB_FORWARD;
        NEXT_TAB;
        PREVIOUS_TAB;
        prettifyShortcut(aElemKey?);
        metaKeyIsCommandKey();
        getModifierString(elemMod?);
        getKeyString(keyCode?, keyAttribute?);
        getKeyAttribute(chromeKey?);
        getKeycodeAttribute(chromeKey?);
        findShortcut(aElemCommand?);
        chromeModifierKeyMap: {
            Alt;
            Command;
            Ctrl;
            MacCtrl;
            Shift;
        };
        getModifiersAttribute(chromeModifiers?);
        validate(string?);
        isSystem(win?, value?);
        getSystemActionForEvent(event?);
    };
}