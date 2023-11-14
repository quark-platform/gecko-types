declare module "resource://gre/modules/PictureInPictureControls.sys.mjs" {
    export var KEYBOARD_CONTROLS: {
        ALL: number;
        PLAY_PAUSE;
        MUTE_UNMUTE;
        VOLUME;
        SEEK;
        CLOSE;
        LIVE_SEEK;
    };
    export var TOGGLE_POLICIES: {
        DEFAULT: number;
        HIDDEN: number;
        TOP: number;
        ONE_QUARTER: number;
        MIDDLE: number;
        THREE_QUARTERS: number;
        BOTTOM: number;
    };
    export var TOGGLE_POLICY_STRINGS: {};
}