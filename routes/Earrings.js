var express = require('express');
const Earrings_controlers= require('../controllers/Earrings');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', Earrings_controlers.Earrings_view_all_Page);
module.exports = router;
/* GET detail costume page */
router.get('/detail',secured, Earrings_controlers.Earrings_view_one_Page);
module.exports = router;
/* GET create costume page */
router.get('/create', secured,Earrings_controlers.Earrings_create_Page);
/* GET update costume page */
router.get('/update', secured,
Earrings_controlers.Earrings_update_Page);
/* GET delete costume page */
router.get('/delete',secured, Earrings_controlers.Earrings_delete_Page);


