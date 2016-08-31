/**
 * Created by TBtuo on 31/08/16.
 */

var fs = require('fs');
var level = require('level');

var data = fs.readFileSync(process.argv[3], 'utf-8').split('\n')

level(process.argv[2],function (err, db) {
    if (err)
        throw err

    // var batch = db.batch()
    // data.forEach(function (line) {
    //     var d = line.split(',')
    //     if (d[0] == 'del')
    //         return batch.del(d[1])
    //     batch.put(d[1],d[2])
    // })
    //
    // batch.write()

    var operations = data.map(function (line) {
        var d = line.split(',')
        return { type: d[0], key: d[1], value: d[2]}
    })

    db.batch(operations, function (err) {
        if (err)
            throw err
        db.close()
    })





})