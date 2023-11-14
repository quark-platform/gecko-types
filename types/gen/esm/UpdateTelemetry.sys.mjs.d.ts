declare module "resource://gre/modules/UpdateTelemetry.sys.mjs" {
    export var AUSTLMY: {
        EXTERNAL;
        NOTIFY;
        SUBSEQUENT;
        CHK_NO_UPDATE_FOUND: number;
        CHK_DOWNLOAD_UPDATE: number;
        CHK_SHOWPROMPT_PREF: number;
        CHK_HAS_ACTIVEUPDATE: number;
        CHK_IS_DOWNLOADING: number;
        CHK_IS_STAGED: number;
        CHK_IS_DOWNLOADED: number;
        CHK_NO_MUTEX: number;
        CHK_UNABLE_TO_CHECK: number;
        CHK_OFFLINE: number;
        CHK_GENERAL_ERROR_PROMPT: number;
        CHK_GENERAL_ERROR_SILENT: number;
        CHK_NO_COMPAT_UPDATE_FOUND: number;
        CHK_UPDATE_PREVIOUS_VERSION: number;
        CHK_UPDATE_INVALID_TYPE: number;
        CHK_UNSUPPORTED: number;
        CHK_UNABLE_TO_APPLY: number;
        CHK_NO_OS_VERSION: number;
        CHK_NO_OS_ABI: number;
        CHK_INVALID_DEFAULT_URL: number;
        CHK_ELEVATION_DISABLED_FOR_VERSION: number;
        CHK_ELEVATION_OPTOUT_FOR_VERSION: number;
        CHK_DISABLED_BY_POLICY: number;
        CHK_ERR_WRITE_FAILURE: number;
        CHK_OTHER_INSTANCE: number;
        CHK_NO_PARTIAL_PATCH: number;
        pingCheckCode;
        pingCheckExError;
        STARTUP;
        STAGE;
        PATCH_COMPLETE;
        PATCH_PARTIAL;
        PATCH_UNKNOWN;
        DWNLD_SUCCESS: number;
        DWNLD_RETRY_OFFLINE: number;
        DWNLD_RETRY_NET_TIMEOUT: number;
        DWNLD_RETRY_CONNECTION_REFUSED: number;
        DWNLD_RETRY_NET_RESET: number;
        DWNLD_ERR_NO_UPDATE: number;
        DWNLD_ERR_NO_UPDATE_PATCH: number;
        DWNLD_ERR_PATCH_SIZE_LARGER: number;
        DWNLD_ERR_PATCH_SIZE_NOT_EQUAL: number;
        DWNLD_ERR_BINDING_ABORTED: number;
        DWNLD_ERR_ABORT: number;
        DWNLD_ERR_DOCUMENT_NOT_CACHED: number;
        DWNLD_ERR_VERIFY_NO_REQUEST: number;
        DWNLD_ERR_VERIFY_PATCH_SIZE_NOT_EQUAL: number;
        DWNLD_ERR_WRITE_FAILURE: number;
        DWNLD_UNKNOWN_PHASE_ERR_WRITE_FAILURE: number;
        pingDownloadCode;
        STATE_WRITE_FAILURE: number;
        pingStateCode;
        pingStatusErrorCode;
        pingBinaryTransparencyResult;
        pingBitsError;
        pingBitsSuccess;
        _pingBitsResult;
        pingLastUpdateTime;
        pingServiceInstallStatus;
        pingBoolPref;
        pingIntPref;
        pingGeneric;
        MOVE_RESULT_SUCCESS;
        MOVE_RESULT_UNKNOWN_FAILURE;
        pingMoveResult;
        pingSuppressPrompts;
        pingPinPolicy;
    };
}