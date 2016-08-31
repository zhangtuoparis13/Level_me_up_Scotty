/**
 * Created by TBtuo on 30/08/16.
 */

/*
var levelup = require('levelup');
// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = levelup('./mydb');
// 2) put a key & value
db.put('name', 'LevelUP', function (err) {
    if (err) return console.log('Ooops!', err); // some kind of I/O error

    // 3) fetch by key
    db.get('name', function (err, value) {
        if (err) return console.log('Ooops!', err); // likely the key was not found
        // ta da!
        console.log('name=' + value)
    })
});
*/

var level = require('level');
var db = level(process.argv[2]);
var key = process.argv[3];

db.get(key, function (err, value) {
    if (err) throw err;
    console.log(value)
});

