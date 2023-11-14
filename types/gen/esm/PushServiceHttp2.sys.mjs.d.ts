declare module "resource://gre/modules/PushServiceHttp2.sys.mjs" {
    export var PushServiceHttp2: {
        _mainPushService;
        _serverURI;
        _conns: {};
        _started;
        _listenersPendingRetry;
        newPushDB();
        hasmainPushService();
        connect(broadcastListeners?);
        sendSubscribeBroadcast(serviceId?, version?);
        isConnected();
        disconnect();
        _makeChannel(aUri?);
        register(aRecord?);
        _subscribeResourceInternal(aSubInfo?);
        _deleteResource(aUri?);
        _unsubscribeResource(aSubscriptionUri?);
        _listenForMsgs(aSubscriptionUri?);
        _ackMsgRecv(aAckUri?);
        init(aOptions?, aMainPushService?, aServerURL?);
        _retryAfterBackoff(aSubscriptionUri?, retryAfter?);
        _shutdownConnections(deleteInfo?);
        startConnections(aSubscriptions?);
        _startSingleConnection(record?);
        _shutdownSubscription(aSubscriptionUri?);
        uninit();
        _abortPendingSubscriptionRetries();
        unregister(aRecord?);
        reportDeliveryError(messageID?, reason?);
        _resubscribe(aSubscriptionUri?);
        connOnStop(aRequest?, aSuccess?, aSubscriptionUri?);
        addListenerPendingRetry(aListener?);
        removeListenerPendingRetry(aListener?);
        _pushChannelOnStop(aUri?, aAckUri?, aHeaders?, aMessage?);
    };
}