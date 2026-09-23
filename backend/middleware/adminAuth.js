// import jwt from 'jsonwebtoken'

// const adminAuth= async(req,res,next) => {
//     try {

//         const {token} = req.headers
//         if(!token){
//            return res.json({success:false , msg:"Sorry Bete You are not authorized"})
//         }

//         const tokendecode = jwt.verify(token,process.env.JWT_SECRET_KEY)
//         if(tokendecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
//             return res.json({success:false,msg:"Sorry Bete You are not authorized"})
//         }
        
//         next()
        
//     } 
    
//     catch (error) {
//         console.log(error);
//         res.json({success:false,msg:error.message})
//     }
// }

// export default adminAuth


import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {

    try {

        const { token } = req.headers

        if (!token) {
            return res.json({
                success: false,
                msg: "Not authorized"
            })
        }

        const tokenDecode = jwt.verify(
            token,
            process.env.JWT_SECRET_KEY
        )

        if (tokenDecode.email !== process.env.ADMIN_EMAIL) {
            return res.json({
                success: false,
                msg: "Not authorized"
            })
        }

        next()

    } catch (error) {

        console.log(error)

        res.json({
            success: false,
            msg: error.message
        })
    }
}

export default adminAuth