declare module "resource://gre/modules/GeckoViewPush.sys.mjs" {
    export class PushService {
        constructor();
        observe();
        subscribe();
        subscribeWithKey();
        unsubscribe();
        getSubscription();
        clearForDomain();
        notificationForOriginShown();
        notificationForOriginClosed();
        reportDeliveryError();
    }
}