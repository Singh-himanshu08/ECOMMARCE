import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import validator from 'validator'


const createToken = (id)=> {
      return jwt.sign({id},process.env.JWT_SECRET_KEY)
}

//FOR USER LOGIN

const loginUser  = async (req,res) =>{
     try {
        const {email,password} = req.body
        const user =await userModel.findOne({email})

        if(!email){
            return res.json({success:false , msg :"Email Not Existed"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success : false , msg:"Pwd id Incorrect"})
        }



     } catch (error) {

        console.log(error)
        res.json({success:false ,  msg:error.msg})
        
     }
}

// FOR USER REGISTER

const registerUser = async (req,res) =>{
   //res.json({msg:"Api Working Fine"})
   try {
    const {name,email,password} = req.body;

    //

    const exist = await userModel.findOne({email});
    if (exist){
        return res.json({success:false , msg:"User Already Exists" })
    }
 //Validate strong email
 if(!validator.isEmail(email)){
        return res.json({success:false , msg:"Invalid Enail Please Enter a Valid Email"})
 }

 if(password.length <8){
    return res.json({success:false , msg:"Please Enter a Valid Email"})
 }

 //hashing user pwd

const salt = await bcrypt.genSalt(10)
const hashedPassword= await bcrypt.hash(password,salt)

const newUser = new userModel({
    name,
    email,
    password:hashedPassword
})

const user = await newUser.save()

const token = createToken(user._id)

res.json({success:true,token})




   } catch (error) {
     console.log(error);
     res.json({success:false , msg:error.msg})
   }
}
    

//ADMIN ACCESS

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Admin Email:", email);
        console.log("Admin Password:", password);

        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(
                { email },
                process.env.JWT_SECRET_KEY
            );

            return res.json({
                success: true,
                token
            });
        }

        return res.json({
            success: false,
            msg: "Invalid email or password"
        });

    } catch (error) {
        console.log(error);

        return res.json({
            success: false,
            msg: error.msg
        });
    }
};
export {loginUser , registerUser ,adminLogin}