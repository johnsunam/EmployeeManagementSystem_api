const router = require('express').Router();
const Organization = require('./controllers/organizationController');
const User = require('./controllers/userController');
const Academic = require('./controllers/academicController');
const Experience = require('./controllers/experienceController');

router.get('/', (req, res) => {
    res.json({
        status: 'API its working',
        message: 'Welcome to RESTFUL crafted with lvoe!!'
    })
});


router.route('/organization')
        .get(Organization.getOrganization)
        .post(Organization.createOrganization);
router.route('/organization/:id')
        .get(Organization.getOrganizationById)
        
router.route('/user')
        .get(User.getUsers)
        .post(User.createUser)

router.route('/user/:id')
        .get(User.getUserById)
        .put(User.updateUser)
        .delete(User.deleteUser)

router.route('/academic/:id')
    .get(Academic.getAcademic)
    .post(Academic.createAcademic)
    .put(Academic.updateAcademic)
    .delete(Academic.deleteAcademic)

router.route('/experience/:id')
        .get(Experience.getExperience)
        .post(Experience.createExperience)
        .put(Experience.updateExperience)
        .delete(Experience.deleteExperience)

module.exports = router;