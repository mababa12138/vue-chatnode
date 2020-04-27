import websdk from 'easemob-websdk';
import config from './webim.config';
import emoji from './emoji';
import msgType from './msg-type';

const WebIM = window.WebIM || {};

WebIM.config = config;
WebIM.msgType = msgType;
WebIM.conn = new websdk.connection({
    isHttpDNS: WebIM.config.isHttpDNS,
    isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
    https: WebIM.config.https,
    url: WebIM.config.xmppURL,
    isAutoLogin: false,
    heartBeatWait: WebIM.config.heartBeatWait,
    autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
    autoReconnectInterval: WebIM.config.autoReconnectInterval,
    isStropheLog: WebIM.config.isStropheLog,
    delivery: WebIM.config.delivery,
    appKey: WebIM.config.appkey
});

if (!WebIM.conn.apiUrl) {
    WebIM.conn.apiUrl = WebIM.config.apiURL;
}

websdk.debug(false);

const appKeyPair = WebIM.config.appkey.split("#");// eslint-disable-line no-unused-vars
const baseUrl = `${WebIM.config.apiURL}/${appKeyPair[0]}/${appKeyPair[1]}`;// eslint-disable-line no-unused-vars

WebIM.emoji = emoji;

export default WebIM;