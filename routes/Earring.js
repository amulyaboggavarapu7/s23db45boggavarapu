var express = require('express');
const Earrings_controllers= require('../controllers/Earrings');
var router = express.Router();
/* GET detail costume page */
router.get('/detail', Earrings_controllers.Earrings_view_one_Page);
module.exports = router;
/* GET create costume page */
router.get('/create', Earrings_controllers.Earrings_create_Page);
/* GET create update page */
router.get('/update', Earrings_controllers.Earrings_update_Page);
/* GET delete costume page */
router.get('/delete', Earrings_controllers.Earrings_delete_Page);


