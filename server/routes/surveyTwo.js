let express = require('express');
let router = express.Router();

let surveyTwoController = require('../controllers/surveyTwo');

/* GET Order List page -- READ Operation */
router.get('/', surveyTwoController.displaySurveyList);

/* POST Route for processing the Add Order Page */
router.post('/add', surveyTwoController.processAddPage);

module.exports = router;