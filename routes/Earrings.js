var express = require('express');
const Earrings_controlers= require('../controllers/Earrings');
var router = express.Router();
/* GET costumes */
router.get('/', Earrings_controlers.Earrings_view_all_Page);
module.exports = router;

