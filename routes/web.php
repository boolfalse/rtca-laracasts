<?php

use App\Events\UserSignedUp;

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

Route::get('/{user_id}', function ($user_id) {

    event(new UserSignedUp($user_id));

    return view('welcome');
});
