declare module "resource://gre/modules/GeckoViewPush.sys.mjs" {
    export class PushService {
        constructor();
        observe(subject?, topic?, data?);
        subscribe(scope?, principal?, callback?);
        subscribeWithKey(scope?, principal?, appServerKey?, callback?);
        unsubscribe(scope?, principal?, callback?);
        getSubscription(scope?, principal?, callback?);
        clearForDomain(domain?, callback?);
        notificationForOriginShown(origin?);
        notificationForOriginClosed(origin?);
        reportDeliveryError(messageId?, reason?);
        pushTopic;
        subscriptionChangeTopic;
        subscriptionModifiedTopic;
    }
}