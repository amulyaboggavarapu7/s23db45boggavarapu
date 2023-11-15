var express = require('express');
const Earrings_controlers= require('../controllers/Earrings');
var router = express.Router();
/* GET costumes */
router.get('/', Earrings_controlers.Earrings_view_all_Page);
module.exports = router;
/* GET detail costume page */
router.get('/detail', Earrings_controllers.Earrings_view_one_Page);
module.exports = router;
/* GET create costume page */
router.get('/create', Earrings_controlers.Earrings_create_Page);
/* GET create update page */
router.get('/update', Earrings_controlers.Earrings_update_Page);
/* GET delete costume page */
router.get('/delete', Earrings_controlers.Earrings_delete_Page);

