declare module "resource://gre/modules/MediaUtils.sys.mjs" {
    export var MediaUtils: {
        getMetadata(aElement?);
        isVideoElement(aElement?);
        isAudioElement(aElement?);
        isMediaElement(aElement?);
        findMediaElement(aElement?);
        findVideoElement(aElement?);
        findAudioElement(aElement?);
    };
}