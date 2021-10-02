const express = require('express');


var CityListController = require('../Controllers/City');
var RestaurantController = require('../Controllers/Restaurants');
var MealtypeController = require('../Controllers/Mealtype');
const router = express.Router();


router.get('/getCityList',CityListController.getCityList);
router.get('/getRestaurantByCityName/:cityname', RestaurantController.getRestaurantByCityName);
router.get('/getMealtypes', MealtypeController.getMealtypes);


module.exports = router;