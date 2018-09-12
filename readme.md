
13092018
laracasts/Laravel-Redis-and-Socket.io
https://laracasts.com/series/real-time-laravel-with-socket-io/episodes/1
Free downloaded video course:
https://getfreetutorial.com/laracast-real-time-laravel-socket-io/


1.
git clone https://boolfalse@bitbucket.org/boolfalse/rtca-laracasts.git
2.
copy and past .env.example content into new created .env file
3.
composer install
4.
php artisan key:generate
5.
npm install
6.
run redis (if you have not installed redis yet on your machine, follow substeps)
    6.1
    download and install redis for your PC
    (for me: https://stackoverflow.com/questions/6476945/how-do-i-run-redis-on-windows/10525215)
    6.2
    cd to installed redis directory, and run "redis-server"
7.
node socket.js
8.
open 2 browser windows, and open page with random user_id. for example
http://rtca-laracasts.local/5
http://rtca-laracasts.local/13
9.
after successfully (without any errors in console commands redis and node) runs,
you must to see subscribed user IDs in your web page

