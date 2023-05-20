declare module "resource://gre/modules/PushServiceWebSocket.sys.mjs" {
    var PushServiceWebSocket: {
        QueryInterface;
        name;
        _mainPushService;
        _serverURI;
        _currentlyRegistering;
        newPushDB();
        disconnect();
        observe(aSubject, aTopic, aData);
        _onUAIDChanged();
        _onTimerFired(timer);
        _sendPing();
        _timeOutRequests();
        get _UAID(): any;
        set _UAID(newID);
        _ws;
        _pendingRequests;
        _currentState;
        _requestTimeout: number;
        _requestTimeoutTimer;
        _retryFailCount: number;
        _skipReconnect;
        _dataEnabled;
        _lastPingTime: number;
        _pingTimer;
        _backoffTimer;
        _wsSendMessage(msg);
        init(options, mainPushService, serverURI);
        _reconnect();
        _shutdownWS(shouldCancelPending);
        uninit();
        _startBackoffTimer();
        _hasPendingRequests();
        _startRequestTimeoutTimer();
        _startPingTimer();
        _makeWebSocket(uri);
        _beginWSSetup();
        connect(broadcastListeners);
        isConnected();
        _handleHelloReply(reply);
        _handleRegisterReply(reply);
        _handleUnregisterReply(reply);
        _handleDataUpdate(update);
        _handleNotificationReply(reply);
        _handleBroadcastReply(reply);
        reportDeliveryError(messageID, reason);
        _sendAck(channelID, version, status);
        _generateID();
        register(record);
        unregister(record, reason);
        _queueStart;
        _notifyRequestQueue;
        _queue;
        _enqueue(op);
        _send(data);
        _requestHasReply(data);
        _sendPendingRequests();
        _queueRequest(data);
        _receivedUpdate(aChannelID, aLatestVersion);
        _wsOnStart(context);
        _sendHello(records);
        _wsOnStop(context, statusCode);
        _wsOnMessageAvailable(context, message);
        _wsOnServerClose(context, aStatusCode, aReason);
        _cancelPendingRequests();
        _makePendingRequestKey(data);
        _sendRequestForReply(record, data);
        _takeRequestForReply(reply);
        sendSubscribeBroadcast(serviceId, version);
    };
}