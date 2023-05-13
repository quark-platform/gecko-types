declare module "resource://gre/modules/services-settings/remote-settings.sys.mjs" {
    function jexlFilterFunc(entry, environment);
    var RemoteSettings;
    var remoteSettingsBroadcastHandler: {
        receivedBroadcastMessage(version, broadcastID, context);
    };
}