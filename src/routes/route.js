const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require('../controllers/weatherController')
const MemeController= require('../controllers/memeController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getSession",CowinController.getSession)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/allweather", WeatherController.getWeather)
router.get("/temperature", WeatherController.getOnlyTemp)
router.get("/sortCities",WeatherController.getSortCities)
router.post("/createMeme", MemeController.memeEdit)


module.exports = router;