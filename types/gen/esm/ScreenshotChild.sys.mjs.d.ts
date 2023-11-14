declare module "resource://app/modules/ScreenshotChild.sys.mjs" {
    export class ScreenshotChild extends JSWindowActorChild {
        receiveMessage(message?);
        getDimensions();
    }
}