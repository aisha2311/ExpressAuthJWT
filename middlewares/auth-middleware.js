import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'



var checkUserAuth = async(req, res, next)=>{
    let token
    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try {
            //getting token from header here
            token = authorization.split(' ')[1]
            //conslole.log("Token", token ) - to print token

            //verifying token 
            const{userID} = jwt.verify(token, process.env.JWT_SECRET_KEY)
            // console.log(userID) - to verify if we are getting id

            //get user from Token 
            req.user= await UserModel.findById(userID).select('-password')
            //console.log(req.user) - tocheck if we have data in user


            next()


        } catch (error) {
            console.log(error)
            res.status(401).send({"status": "failed" , "message": "Unauthorized User"})
            
        }

    }
    if(!token){
      res.status(401).send({"status": "failed" , "message": "Unauthorized User, no token"})  
    }
}

export default checkUserAuth