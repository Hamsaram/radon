let axios = require("axios")
let memeEdit= async function (req, res){
    try{
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=129242436&text0=FunctionUp is the best&username=chewie12345&password=meme@123`
        };
        let result = await axios(options)
        res.send({ data: result.data})

    }catch(err){
        console.log(err)
        res.status(500).send({ msg: err.message }) 
    } 
}

module.exports.memeEdit= memeEdit