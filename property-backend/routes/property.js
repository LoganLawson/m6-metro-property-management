const router = require('express').Router();
let Property = require('../models/property.models');

router.route('/').get((req, res) => {
    Property.find()
        .then(property => res.json(property))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;