<?php

use Illuminate\Support\Facades\Redis;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    // 1. Publish event with redis

    $data = [
        'event' => 'UserSignedUp',
        'payload' => [
            'username' => 'John Doe',
            'email' => 'johndoe@gmail.com'
        ],
    ];

    // 2. Node.js + Redis subscribes to the event (setup a redis client with node js and subscribe to that channel)

    Redis::publish('test-channel', json_encode($data));

    // 3. Use socket.io to emit to all clients

    return view('welcome');
});
