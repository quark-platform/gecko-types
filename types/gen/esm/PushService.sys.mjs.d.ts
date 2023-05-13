declare module "resource://gre/modules/PushService.sys.mjs" {
    var PushServiceWebSocket;
    var PushServiceHttp2;
    var PushService: {
        _service;
        _state;
        _db;
        _options;
        _visibleNotifications;
        _updateQuotaTestCallback;
        _updateQuotaTimeouts;
        _stateChangeProcessQueue;
        _stateChangeProcessEnqueue(op);
        _pendingRegisterRequest: {};
        _notifyActivated;
        _activated;
        _checkActivated();
        _makePendingKey(aPageRecord);
        _lookupOrPutPendingRequest(aPageRecord);
        _deletePendingRequest(aPageRecord);
        _setState(aNewState);
        _changeStateOfflineEvent(offline, calledFromConnEnabledEvent);
        _changeStateConnectionEnabledEvent(enabled);
        changeTestServer(url);
        observe;
        _clearOriginData(data);
        _backgroundUnregister(record, reason);
        _findService(serverURL);
        _changeServerURL(serverURI, event);
        init();
        _startObservers();
        _startService(service, serverURI, options);
        _stopService(event);
        _stopObservers();
        _shutdownService();
        uninit();
        dropUnexpiredRegistrations();
        _notifySubscriptionChangeObservers(record);
        dropRegistrationAndNotifyApp(aKeyID);
        updateRegistrationAndNotifyApp(aOldKey, aNewRecord);
        updateRecordAndNotifyApp(aKeyID, aUpdateFunc);
        ensureCrypto(record);
        receivedPushMessage(keyID, messageID, headers, data, updateFunc);
        receivedBroadcastMessage(message, context);
        _updateRecordAfterPush(keyID, updateFunc);
        _decryptAndNotifyApp(record, messageID, headers, data);
        _updateQuota(keyID);
        notificationForOriginShown(origin);
        notificationForOriginClosed(origin);
        reportDeliveryError(messageID, reason);
        _notifyApp(aPushRecord, messageID, message);
        getByKeyID(aKeyID);
        getAllUnexpired();
        _sendRequest(action);
        _registerWithServer(aPageRecord);
        _sendUnregister(aRecord, aReason);
        _onRegisterSuccess(aRecord);
        _onRegisterError(reply);
        notificationsCleared();
        _getByPageRecord(pageRecord);
        register(aPageRecord);
        subscribeBroadcast(broadcastId, version);
        unregister(aPageRecord);
        clear(info);
        registration(aPageRecord);
        _dropExpiredRegistrations();
        _onPermissionChange(subject, data);
        _clearPermissions();
        _updatePermission(permission, type);
        _forEachPrincipal(principal, callback);
        _permissionDenied(record, cursor);
        _permissionAllowed(record, cursor);
        _dropRegistrationsIf(predicate);
    };
}