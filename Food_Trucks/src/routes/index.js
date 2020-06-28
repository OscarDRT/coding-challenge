const express = require('express')
const router = express.Router();

//main path
router.get('/', (req, res) => {
    res.render('index');
});

/* 
if new routes are required add them here 
*/

module.exports = router;