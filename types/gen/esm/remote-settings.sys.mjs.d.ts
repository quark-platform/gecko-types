declare module "resource://gre/modules/services-settings/remote-settings.sys.mjs" {
    export function jexlFilterFunc(entry?, environment?);
    export var RemoteSettings;
    export var remoteSettingsBroadcastHandler: {
        receivedBroadcastMessage(version?, broadcastID?, context?);
    };
}