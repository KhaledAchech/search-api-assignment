const express = require('express');
const router = express.Router();

const artist_ctrl = require('../controllers/artists_controller');

//Get Artist by name
router.get('/:name', artist_ctrl.getByName);

module.exports = router;
