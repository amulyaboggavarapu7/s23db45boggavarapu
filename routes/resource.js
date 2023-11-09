var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Earrings_controller = require('../controllers/Earrings');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Earrings', Earrings_controller.Earring_create_post);
// DELETE request to delete Costume.
router.delete('/Earrings/:id', Earrings_controller.Earring_delete);
// PUT request to update Costume.
router.put('/Earrings/:id', Earrings_controller.Earring_update_put);
// GET request for one Costume.
router.get('/Earrings/:id', Earrings_controller.Earring_detail);
// GET request for list of all Costume items.
router.get('/Earrings', Earrings_controller.Earring_list);
module.exports = router;
