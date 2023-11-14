declare module "resource://gre/modules/media/PeerConnection.sys.mjs" {
    export class GlobalPCList {
        constructor();
        notifyLifecycleObservers(pc?, type?);
        addPC(pc?);
        findPC(globalPCListId?);
        removeNullRefs(winID?);
        handleGMPCrash(data?);
        receiveMessage(param0?);
        observe(subject?, topic?, data?);
        _registerPeerConnectionLifecycleCallback(winID?, cb?);
    }
    export class RTCIceCandidate {
        init(win?);
        __init(dict?);
    }
    export class RTCSessionDescription {
        init(win?);
        __init(param0?);
        get type();
        set type(type);
        get sdp();
        set sdp(sdp);
        warn();
        logWarning(msg?);
    }
    export class RTCPeerConnection {
        constructor();
        init(win?);
        _applyPrefsToConfig(rtcConfig?);
        _validateConfig(rtcConfig?);
        _checkIfIceRestartRequired(rtcConfig?);
        __init(rtcConfig?);
        getConfiguration();
        setConfiguration(rtcConfig?);
        _initCertificate(certificate?);
        _resetPeerIdentityPromise();
        _initIdp();
        _chain(operation?);
        _async(func?);
        _legacy(param0?);
        _auto(onSucc?, onErr?, func?);
        _closeWrapper(func?);
        _legacyCloseWrapper(onSucc?, onErr?, func?);
        _queueTaskWithClosedCheck(func?);
        _validateIceServers(iceServers?, msg?);
        _checkClosed();
        dispatchEvent(event?);
        logErrorAndCallOnError(e?);
        logError(msg?);
        logWarning(msg?);
        logStackMsg(msg?, flag?);
        logMsg(msg?, file?, line?, flag?);
        getEH(type?);
        setEH(type?, handler?);
        makeGetterSetterEH(name?);
        makeLegacyGetterSetterEH(name?, msg?);
        createOffer(optionsOrOnSucc?, onErr?, options?);
        _ensureOfferToReceive(kind?);
        _ensureTransceiversForOfferToReceive(options?);
        _createOffer(options?);
        _createAnOffer(param0?);
        createAnswer(optionsOrOnSucc?, onErr?);
        _createAnswer(options?);
        _createAnAnswer();
        _getPermission();
        _sanityCheckSdp(sdp?);
        setLocalDescription(desc?, onSucc?, onErr?);
        _setLocalDescription(param0?);
        _validateIdentity(sdp?, origin?);
        setRemoteDescription(desc?, onSucc?, onErr?);
        _setRemoteDescription(param0?);
        setIdentityProvider(provider?, param1?);
        _getIdentityAssertion();
        getIdentityAssertion();
        get canTrickleIceCandidates();
        _updateCanTrickle();
        addIceCandidate(cand?, onSucc?, onErr?);
        _addIceCandidate(param0?);
        restartIce();
        addStream(stream?);
        addTrack(track?, param1?);
        removeTrack(sender?);
        _addTransceiverNoEvents(sendTrackOrKind?, init?, addTrackMagic?);
        addTransceiver(sendTrackOrKind?, init?);
        updateNegotiationNeeded();
        close();
        getLocalStreams();
        getRemoteStreams();
        getSenders();
        getReceivers();
        mozSetPacketCallback(callback?);
        mozEnablePacketDump(level?, type?, sending?);
        mozDisablePacketDump(level?, type?, sending?);
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
        changeIceConnectionState(state?);
        getStats(selector?, onSucc?, onErr?);
        get sctp();
        createDataChannel(label?, param1?);
    }
    export class PeerConnectionObserver {
        init(win?);
        __init(dompc?);
        newError(param0?);
        dispatchEvent(event?);
        onCreateOfferSuccess(sdp?);
        onCreateOfferError(error?);
        onCreateAnswerSuccess(sdp?);
        onCreateAnswerError(error?);
        onSetDescriptionSuccess();
        onSetDescriptionError(error?);
        onAddIceCandidateSuccess();
        onAddIceCandidateError(error?);
        onIceCandidate(sdpMLineIndex?, sdpMid?, candidate?, usernameFragment?);
        handleIceConnectionStateChange(iceConnectionState?);
        onStateChange(state?);
        onTransceiverNeeded(kind?, transceiverImpl?);
        notifyDataChannel(channel?);
        fireTrackEvent(receiver?, streams?);
        fireStreamEvent(stream?);
        fireNegotiationNeededEvent();
        onPacket(level?, type?, sending?, packet?);
    }
    export class RTCPeerConnectionStatic {
        init(win?);
        registerPeerConnectionLifecycleCallback(cb?);
    }
    export class CreateOfferRequest {
        constructor(windowID, innerWindowID, callID, isSecure);
    }
}