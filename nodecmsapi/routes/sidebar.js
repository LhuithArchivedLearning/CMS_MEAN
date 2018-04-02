var express = require('express');
var router = express.Router();

//Get Sidebar Model
var Sidebar = require('../models/sidebar');

/*
* GET edit sidebar
*/
//Exports
router.get('/edit-sidebar', function (req, res) {

    var id = "5ac22caf5f9f734a18049dfe";

    Sidebar.findById(id, function (err, sidebar) {
        if (err) console.log(err);
        res.json(sidebar);
    });
});

/*
*Post add page
*/
router.post('/edit-sidebar', function (req, res) {

    var id = "5ac22caf5f9f734a18049dfe";

    Sidebar.findById(id, function (err, sidebar) {
        if (err) console.log(err);

        sidebar.content = req.body.content;
        sidebar.save(function (err) {
            if (err) {
                console.log(err);
                res.json("problem");
            } else {
                res.json("ok");
            }
        });

    });
});

module.exports = router;