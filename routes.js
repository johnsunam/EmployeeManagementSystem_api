const router = require('express').Router();
const Organization = require('./controllers/organizationController');

router.get('/', (req, res) => {
    res.json({
        status: 'API its working',
        message: 'Welcome to RESTFUL crafted with lvoe!!'
    })
});


router.route('/organization')
        .get(Organization.getOrganization)
        .post(Organization.createOrganization);

module.exports = router;