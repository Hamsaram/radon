const c = function printDate(){
    const date = new Date()
    const day = date.getDate()
console.log('The date is '+ day)
}

const d = function printMonth(){
    const e = new Date();
    const month = e.toLocaleString("en-US", { month: "long"});
    console.log("Month is:" + month)
}

const g = function getBatchInfo(){

    console.log("Radon, W3D3, the topic for today is Nodejs module systems")
}

module.exports.dd = c
module.exports.mm = d
module.exports.bt = g
