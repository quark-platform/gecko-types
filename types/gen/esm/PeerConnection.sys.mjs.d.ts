declare module "resource://gre/modules/media/PeerConnection.sys.mjs" {
    export class GlobalPCList {
        constructor();
        notifyLifecycleObservers();
        addPC();
        findPC();
        removeNullRefs();
        handleGMPCrash();
        receiveMessage();
        observe();
        _registerPeerConnectionLifecycleCallback();
    }
    export class RTCIceCandidate {
        init();
        __init();
    }
    export class RTCSessionDescription {
        init();
        __init();
        get type();
        set type(type);
        get sdp();
        set sdp(sdp);
        warn();
        logWarning();
    }
    export class RTCPeerConnection {
        constructor();
        init();
        _applyPrefsToConfig();
        _validateConfig();
        _checkIfIceRestartRequired();
        __init();
        getConfiguration();
        setConfiguration();
        _initCertificate();
        _resetPeerIdentityPromise();
        _initIdp();
        _chain();
        _async();
        _legacy();
        _auto();
        _closeWrapper();
        _legacyCloseWrapper();
        _queueTaskWithClosedCheck();
        _validateIceServers();
        _checkClosed();
        dispatchEvent();
        logErrorAndCallOnError();
        logError();
        logWarning();
        logStackMsg();
        logMsg();
        getEH();
        setEH();
        makeGetterSetterEH();
        makeLegacyGetterSetterEH();
        createOffer();
        _ensureOfferToReceive();
        _ensureTransceiversForOfferToReceive();
        _createOffer();
        _createAnOffer();
        createAnswer();
        _createAnswer();
        _createAnAnswer();
        _getPermission();
        _sanityCheckSdp();
        setLocalDescription();
        _setLocalDescription();
        _validateIdentity();
        setRemoteDescription();
        _setRemoteDescription();
        setIdentityProvider();
        _getIdentityAssertion();
        getIdentityAssertion();
        get canTrickleIceCandidates();
        _updateCanTrickle();
        addIceCandidate();
        _addIceCandidate();
        restartIce();
        addStream();
        addTrack();
        removeTrack();
        _addTransceiverNoEvents();
        addTransceiver();
        updateNegotiationNeeded();
        close();
        getLocalStreams();
        getRemoteStreams();
        getSenders();
        getReceivers();
        mozSetPacketCallback();
        mozEnablePacketDump();
        mozDisablePacketDump();
        getTransceivers();
        get localDescription();
        get currentLocalDescription();
        get pendingLocalDescription();
        get remoteDescription();
        get currentRemoteDescription();
        get pendingRemoteDescription();
        get peerIdentity();
        get idpLoginUrl();
        get id();
        set id(s);
        get iceGatheringState();
        get iceConnectionState();
        get connectionState();
        get signalingState();
        handleIceGatheringStateChange();
        changeIceConnectionState();
        getStats();
        get sctp();
        createDataChannel();
    }
    export class PeerConnectionObserver {
        init();
        __init();
        newError();
        dispatchEvent();
        onCreateOfferSuccess();
        onCreateOfferError();
        onCreateAnswerSuccess();
        onCreateAnswerError();
        onSetDescriptionSuccess();
        onSetDescriptionError();
        onAddIceCandidateSuccess();
        onAddIceCandidateError();
        onIceCandidate();
        handleIceConnectionStateChange();
        onStateChange();
        onTransceiverNeeded();
        notifyDataChannel();
        fireTrackEvent();
        fireStreamEvent();
        fireNegotiationNeededEvent();
        onPacket();
    }
    export class RTCPeerConnectionStatic {
        init();
        registerPeerConnectionLifecycleCallback();
    }
    export class CreateOfferRequest {
        constructor(windowID, innerWindowID, callID, isSecure);
    }
}