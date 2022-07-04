const internModel = require('../models/internModel')
const collegeModel = require('../models/collegeModel')
const {isValidRequest, 
        isValidName, 
        isValidMail,
        isValidMobile,
        isValidString} = require('../validator/validation')

// -----------------------------create Intern------------------------------------
const createIntern = async function(req, res){
    try{

        //validating the body part if the body is empty
        if (!isValidRequest(req.body)) {
            return res
                .status(400)
                .send({ status: false, message: "Enter a valid Input" })
        }

        let {name, email, mobile, collegeName}= req.body
        let internData = {};

        //intern name validation
        if(name){
            name = name.trim()
            if(!isValidString(name)){
                return res
                    .status(400)
                    .send({status:false, message:"Enter a valid name"})
            }else{
                internData.name = name
            }
        }else return res
                .status(400)
                .send({status:false, message:"Name is required"})
        
        //email validation
        if(email){
            if(!isValidMail(email))
                return res
                .status(400)
                .send({status:false, message:"Enter a valid email"})
        }else return res
                .status(400)
                .send({status:false, message:"email is required"})
        
        //mobile number validation
        if(mobile){
            mobile = mobile
            if(!isValidMobile(mobile))
                return res
                .status(400)
                .send({status:false, message:"Enter a valid mobile number"})    
        }else return res
            .status(400)
            .send({status:false, message:"Mobile number is required"})

        //checking the duplicacy of email and mobile number
        const isDuplicate = await internModel.findOne({$or:[{email:email}, {mobile:mobile}]})

        if(isDuplicate){
            return res
            .status(400)
            .send({status:false, message:"email or mobile number is already in use"})
        }else{
             internData.email = email;
             internData.mobile = mobile;
        }

        //validating the collegename and finding the college
        if(collegeName){
            collegeName = collegeName.toLowerCase().trim()
            if(!isValidName(collegeName)){
                return res
                .status(400)
                .send({status:false, message:"Enter a Valid college name"})
            }else{
                const college = await collegeModel.findOne({name: collegeName})

                //getting college Id from college name 
                if(college){
                    internData.collegeId = college._id
                }else{
                    return res
                    .status(404)
                    .send({status:false, message:"No such college exists"})
                }
            }
        }else return res
            .status(400)
            .send({status:false, message:"collegeName is required"})
        
        //creating the intern data
        const intern = await internModel.create(internData)
        return res
                .status(201)
                .send({status:true, data: intern})
    }


    catch(error){
        return res
            .status(500)
            .send({status: false, message: error.message})
    }
}


module.exports = {createIntern}
