var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var conn = require("../mysqlConfig");

router.post('/login', (req, res) => {
    conn.query(
        'select * from userinfo where uid=?',
        [req.body.uid],
        async (err, rows) => {
            if (!err && rows.length > 0) {
                const result = await bcrypt.compare(req.body.pwd, rows[0].pwd);
                result ? res.json(rows) : res.send('noRows');
            } else {
                console.log(err);
                res.send('noRows');
            }
        })
})


module.exports = router;