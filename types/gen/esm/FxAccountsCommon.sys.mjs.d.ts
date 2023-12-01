declare module "resource://gre/modules/FxAccountsCommon.sys.mjs" {export let log: any;
export let logManager: any;
export function logPII(): boolean;
export let FXACCOUNTS_PERMISSION: string;
export let DATA_FORMAT_VERSION: number;
export let DEFAULT_STORAGE_FILENAME: string;
export let OAUTH_TOKEN_FOR_SYNC_LIFETIME_SECONDS: number;
export let POLL_SESSION: number;
export let ONLOGIN_NOTIFICATION: string;
export let ONVERIFIED_NOTIFICATION: string;
export let ONLOGOUT_NOTIFICATION: string;
export let ON_PRELOGOUT_NOTIFICATION: string;
export let ON_DEVICE_CONNECTED_NOTIFICATION: string;
export let ON_DEVICE_DISCONNECTED_NOTIFICATION: string;
export let ON_PROFILE_UPDATED_NOTIFICATION: string;
export let ON_PASSWORD_CHANGED_NOTIFICATION: string;
export let ON_PASSWORD_RESET_NOTIFICATION: string;
export let ON_ACCOUNT_DESTROYED_NOTIFICATION: string;
export let ON_COLLECTION_CHANGED_NOTIFICATION: string;
export let ON_VERIFY_LOGIN_NOTIFICATION: string;
export let ON_COMMAND_RECEIVED_NOTIFICATION: string;
export let FXA_PUSH_SCOPE_ACCOUNT_UPDATE: string;
export let ON_PROFILE_CHANGE_NOTIFICATION: string;
export let ON_ACCOUNT_STATE_CHANGE_NOTIFICATION: string;
export let ON_NEW_DEVICE_ID: string;
export let ON_DEVICELIST_UPDATED: string;
export let COMMAND_PREFIX: string;
export let COMMAND_SENDTAB_TAIL: string;
export let COMMAND_SENDTAB: string;
export let FX_OAUTH_CLIENT_ID: string;
export let SCOPE_PROFILE: string;
export let SCOPE_PROFILE_WRITE: string;
export let SCOPE_OLD_SYNC: string;
export let DEPRECATED_SCOPE_ECOSYSTEM_TELEMETRY: string;
export let FX_MONITOR_OAUTH_CLIENT_ID: string;
export let UI_REQUEST_SIGN_IN_FLOW: string;
export let UI_REQUEST_REFRESH_AUTH: string;
export let WEBCHANNEL_ID: string;
export let COMMAND_PAIR_HEARTBEAT: string;
export let COMMAND_PAIR_SUPP_METADATA: string;
export let COMMAND_PAIR_AUTHORIZE: string;
export let COMMAND_PAIR_DECLINE: string;
export let COMMAND_PAIR_COMPLETE: string;
export let COMMAND_PROFILE_CHANGE: string;
export let COMMAND_CAN_LINK_ACCOUNT: string;
export let COMMAND_LOGIN: string;
export let COMMAND_LOGOUT: string;
export let COMMAND_DELETE: string;
export let COMMAND_SYNC_PREFERENCES: string;
export let COMMAND_CHANGE_PASSWORD: string;
export let COMMAND_FXA_STATUS: string;
export let COMMAND_PAIR_PREFERENCES: string;
export let COMMAND_FIREFOX_VIEW: string;
export let PREF_ACCOUNT_ROOT: string;
export let PREF_LAST_FXA_USER: string;
export let PREF_REMOTE_PAIRING_URI: string;
export let ERRNO_ACCOUNT_ALREADY_EXISTS: number;
export let ERRNO_ACCOUNT_DOES_NOT_EXIST: number;
export let ERRNO_INCORRECT_PASSWORD: number;
export let ERRNO_UNVERIFIED_ACCOUNT: number;
export let ERRNO_INVALID_VERIFICATION_CODE: number;
export let ERRNO_NOT_VALID_JSON_BODY: number;
export let ERRNO_INVALID_BODY_PARAMETERS: number;
export let ERRNO_MISSING_BODY_PARAMETERS: number;
export let ERRNO_INVALID_REQUEST_SIGNATURE: number;
export let ERRNO_INVALID_AUTH_TOKEN: number;
export let ERRNO_INVALID_AUTH_TIMESTAMP: number;
export let ERRNO_MISSING_CONTENT_LENGTH: number;
export let ERRNO_REQUEST_BODY_TOO_LARGE: number;
export let ERRNO_TOO_MANY_CLIENT_REQUESTS: number;
export let ERRNO_INVALID_AUTH_NONCE: number;
export let ERRNO_ENDPOINT_NO_LONGER_SUPPORTED: number;
export let ERRNO_INCORRECT_LOGIN_METHOD: number;
export let ERRNO_INCORRECT_KEY_RETRIEVAL_METHOD: number;
export let ERRNO_INCORRECT_API_VERSION: number;
export let ERRNO_INCORRECT_EMAIL_CASE: number;
export let ERRNO_ACCOUNT_LOCKED: number;
export let ERRNO_ACCOUNT_UNLOCKED: number;
export let ERRNO_UNKNOWN_DEVICE: number;
export let ERRNO_DEVICE_SESSION_CONFLICT: number;
export let ERRNO_SERVICE_TEMP_UNAVAILABLE: number;
export let ERRNO_PARSE: number;
export let ERRNO_NETWORK: number;
export let ERRNO_UNKNOWN_ERROR: number;
export let OAUTH_SERVER_ERRNO_OFFSET: number;
export let ERRNO_UNKNOWN_CLIENT_ID: number;
export let ERRNO_INCORRECT_CLIENT_SECRET: number;
export let ERRNO_INCORRECT_REDIRECT_URI: number;
export let ERRNO_INVALID_FXA_ASSERTION: number;
export let ERRNO_UNKNOWN_CODE: number;
export let ERRNO_INCORRECT_CODE: number;
export let ERRNO_EXPIRED_CODE: number;
export let ERRNO_OAUTH_INVALID_TOKEN: number;
export let ERRNO_INVALID_REQUEST_PARAM: number;
export let ERRNO_INVALID_RESPONSE_TYPE: number;
export let ERRNO_UNAUTHORIZED: number;
export let ERRNO_FORBIDDEN: number;
export let ERRNO_INVALID_CONTENT_TYPE: number;
export let ERROR_ACCOUNT_ALREADY_EXISTS: string;
export let ERROR_ACCOUNT_DOES_NOT_EXIST: string;
export let ERROR_ACCOUNT_LOCKED: string;
export let ERROR_ACCOUNT_UNLOCKED: string;
export let ERROR_ALREADY_SIGNED_IN_USER: string;
export let ERROR_DEVICE_SESSION_CONFLICT: string;
export let ERROR_ENDPOINT_NO_LONGER_SUPPORTED: string;
export let ERROR_INCORRECT_API_VERSION: string;
export let ERROR_INCORRECT_EMAIL_CASE: string;
export let ERROR_INCORRECT_KEY_RETRIEVAL_METHOD: string;
export let ERROR_INCORRECT_LOGIN_METHOD: string;
export let ERROR_INVALID_EMAIL: string;
export let ERROR_INVALID_AUDIENCE: string;
export let ERROR_INVALID_AUTH_TOKEN: string;
export let ERROR_INVALID_AUTH_TIMESTAMP: string;
export let ERROR_INVALID_AUTH_NONCE: string;
export let ERROR_INVALID_BODY_PARAMETERS: string;
export let ERROR_INVALID_PASSWORD: string;
export let ERROR_INVALID_VERIFICATION_CODE: string;
export let ERROR_INVALID_REFRESH_AUTH_VALUE: string;
export let ERROR_INVALID_REQUEST_SIGNATURE: string;
export let ERROR_INTERNAL_INVALID_USER: string;
export let ERROR_MISSING_BODY_PARAMETERS: string;
export let ERROR_MISSING_CONTENT_LENGTH: string;
export let ERROR_NO_TOKEN_SESSION: string;
export let ERROR_NO_SILENT_REFRESH_AUTH: string;
export let ERROR_NOT_VALID_JSON_BODY: string;
export let ERROR_OFFLINE: string;
export let ERROR_PERMISSION_DENIED: string;
export let ERROR_REQUEST_BODY_TOO_LARGE: string;
export let ERROR_SERVER_ERROR: string;
export let ERROR_SYNC_DISABLED: string;
export let ERROR_TOO_MANY_CLIENT_REQUESTS: string;
export let ERROR_SERVICE_TEMP_UNAVAILABLE: string;
export let ERROR_UI_ERROR: string;
export let ERROR_UI_REQUEST: string;
export let ERROR_PARSE: string;
export let ERROR_NETWORK: string;
export let ERROR_UNKNOWN: string;
export let ERROR_UNKNOWN_DEVICE: string;
export let ERROR_UNVERIFIED_ACCOUNT: string;
export let ERROR_UNKNOWN_CLIENT_ID: string;
export let ERROR_INCORRECT_CLIENT_SECRET: string;
export let ERROR_INCORRECT_REDIRECT_URI: string;
export let ERROR_INVALID_FXA_ASSERTION: string;
export let ERROR_UNKNOWN_CODE: string;
export let ERROR_INCORRECT_CODE: string;
export let ERROR_EXPIRED_CODE: string;
export let ERROR_OAUTH_INVALID_TOKEN: string;
export let ERROR_INVALID_REQUEST_PARAM: string;
export let ERROR_INVALID_RESPONSE_TYPE: string;
export let ERROR_UNAUTHORIZED: string;
export let ERROR_FORBIDDEN: string;
export let ERROR_INVALID_CONTENT_TYPE: string;
export let ERROR_NO_ACCOUNT: string;
export let ERROR_AUTH_ERROR: string;
export let ERROR_INVALID_PARAMETER: string;
export let ERROR_CODE_METHOD_NOT_ALLOWED: number;
export let ERROR_MSG_METHOD_NOT_ALLOWED: string;
export let FXA_PWDMGR_PLAINTEXT_FIELDS: Set<string>;
export let FXA_PWDMGR_SECURE_FIELDS: Set<string>;
export let FXA_PWDMGR_REAUTH_ALLOWLIST: Set<string>;
export let FXA_PWDMGR_HOST: string;
export let FXA_PWDMGR_REALM: string;
export let SERVER_ERRNO_TO_ERROR: {
    [x: number]: string;
};
export let ERROR_TO_GENERAL_ERROR_CLASS: {
    [x: string]: string;
};
}