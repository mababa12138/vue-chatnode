function getUrl () {
    let apiUrl = (window.location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com'
    let xmppUrl = (window.location.protocol === 'https:' ? 'https:' : 'http:') + '//im-api-v2.easemob.com/ws'
    return {
        apiUrl: apiUrl,
        xmppUrl: xmppUrl
    };
}

let config = {
    xmppURL: getUrl().xmppUrl,
    apiURL: getUrl().apiUrl,
    // 使用官方Demo的appkey，有时会监听不到回调，推荐使用自己注册的appkey
    appkey: '1100200419113653#vue-chatnode',
    Host: 'easemob.com',
    https: true,
    isHttpDNS: false,
    isMultiLoginSessions: false,
    isWindowSDK: false,
    isSandBox: false,
    isDebug: false,
    isStropheLog: false,
    autoReconnectNumMax: 5,
    autoReconnectInterval: 2,
    isWebRTC: window.RTCPeerConnection && /^https:$/.test(window.location.protocol),
    i18n: 'cn',
    isAutoLogin: true,
    p2pMessageCacheSize: 500,
    delivery: true,
    groupMessageCacheSize: 200,
    loglevel: 'ERROR',
    enableLocalStorage: true
};

export default config;