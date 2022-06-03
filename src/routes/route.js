const express = require('express');
const lodash= require('lodash');


const externalModule1 =require('../logger/logger')
const externalModule2 =require('../util/helper')
const externalModule3 =require('../validater/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
  externalModule1.a()
  externalModule2.dd()
  externalModule2.mm()
  externalModule2.bt()
  externalModule3.three()
 res.send('My first ever api!')
});
router.get('/hello', function(req, res) {
  const arrayMonths = ['january', 'february','march','april','may','june','july','august','september','october','november','december']
  console.log(lodash.chunk(arrayMonths,4))

  const oddArray =[1,3,5,7,9,11,13,15,17,19]
  console.log(lodash.tail(oddArray));
  
  const arr1=[1,2,3]
  const arr2=[2,4,6,7]
  const arr3=[2,3,7,8,6]
  const arr4=[10,8,1]
  const arr5=[1,8,2,5,11,7]
  console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))
  
  const movies=[["Thor","The Shining"],["drama","Titanic"],["thriller","Shutter"],["fantasy","Pans Labyrinth"]]
  console.log(lodash.fromPairs(movies))
  
  res.send('Some more solutions!')

});

router.get('/movies', function (req, res){
  let movies = [
    "Rang de Basanti",
    "The Shining",
    "Lord of the rings",
    "Batman begins",
];

res.send(movies);
});

//Invalid index
router.get('/movies/:indexNumber', function (req, res){
  let movies = [
    "Rang de Basanti",
    "The Shining",
    "Lord of the rings",
    "Batman begins"
];
let index = req.params.indexNumber;
if (!movies[index]){
  res.send("please enter a valid index number");
}
res.send(movies[index]);
});


//Array of movie objects
router.get('/films', function (req, res){
  let films =[
    {id:1, name: "The Shining"},
    {id:2, name: "Incendies" },
    {id:3, name: "Rang de Basanti"},
    {id:4, name:"FindingNemo"},
  ];
  res.send(films);
});


//get films by Id
router.get('/films/:filmId', function (req, res){
  let films = [
    {id:1, name: "The Shining"},
    {id:2, name: "Incendies" },
    {id:3, name: "Rang de Basanti"},
    {id:4, name:"FindingNemo"},
];
const input = req.params.filmId;
const result = films.find((ele) => ele.id ==input);
if (result === undefined){
  res.send('No movie exist with this id');
}
res.send(result);
});

module.exports = router;
