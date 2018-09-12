
var server = require('http').Server(); // setup server

var io = require('socket.io')(server); // install socket.io with npm

var Redis = require('ioredis'); // redis client, which is really fast
var redis = new Redis(); // instantiation of required Redis class into in object

redis.subscribe('test-channel'); // subscribe to channel

redis.on('message', function (channel, message) { // whenever a message comes through this channel (when we get any kind of channel)
    // console.log(channel, message);

    var data = JSON.parse(message);
    // console.log(data.event, data.data.user_id);
    io.emit(channel + ':' + data.event, data.data); // test-channel:UserSignedUp
});

server.listen(3000); // boot up the server