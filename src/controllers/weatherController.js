//1.this API is to get weather details of london from the openweather website. 
//2.this api to get tempertature details of london, only temperature
//3. This API is to sort cities based on the temperature in ascending order
let axios = require("axios")

let getWeather= async function (req, res){
    try{
        let city= req.query.q
        let id= req.query.appid
        console.log('query params are: ${city} ${id}')
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data   //.main.temp
        res.status(200).send({ msg: data, status: true })
    
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message }) 
    } 
};
let getOnlyTemp= async function (req, res){
    try{
        let city= req.query.q
        let id= req.query.appid
        console.log('query params are: ${city} ${id}')
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    
    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message }) 
    } 
};

let getSortCities= async function(req, res){
    try{
        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objectArray= [ ]

        for (i=0; i<cities.length; i++){

            let place= {city: cities[i]}
            let report= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=96a6930b90561ab0851408bdb6aea51a`)
            console.log(report.data.main.temp)
            place.temp= report.data.main.temp
            objectArray.push(place)
        }
        let sorted= objectArray.sort( function(a,b) {return a.temp -b.temp})
        console.log(sorted)
        res.status(200).send({status: true, data: sorted})
    }catch (error){
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})

    }
}

module.exports.getWeather = getWeather
module.exports.getOnlyTemp = getOnlyTemp
module.exports.getSortCities= getSortCities
