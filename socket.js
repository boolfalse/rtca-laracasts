
var server = require('http').Server(); // setup server

var io = require('socket.io')(server); // install socket.io with npm

var Redis = require('ioredis'); // redis client, which is really fast
var redis = new Redis(); // instantiation of required Redis class into in object

redis.subscribe('test-channel'); // subscribe to channel

redis.on('message', function (channel, message) { // whenever a message comes through this channel (when we get any kind of channel)
    // console.log('Message received!');

    var data = JSON.parse(message);
    // console.log(data.payload.username);

    io.emit(channel + ':' + data.event, data.payload); // test-channel:UserSignedUp
});

server.listen(3000); // boot up the server