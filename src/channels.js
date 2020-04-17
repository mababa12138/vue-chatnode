var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '971277',
  key: 'a25060e77066afcdea04',
  secret: '3ccc6093637d98494309',
  cluster: 'ap1',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "good luck"
});