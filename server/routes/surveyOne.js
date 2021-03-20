let express = require('express');
let router = express.Router();

let surveyOneController = require('../controllers/surveyOne');

/* GET Order List page -- READ Operation */
router.get('/', surveyOneController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyOneController.processAddPage);

module.exports = router;