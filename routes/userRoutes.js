import express from 'express';
const router =express.Router();
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';

//Route Level middleware - to protect Route 
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)
router.use("/delete", checkUserAuth)

//Public Routes 
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)



//protectted Routes 
router.post('/changepassword', UserController.changeUserPassword)
router.get('/loggeduser' , UserController.loggedUser)
router.delete("/delete",UserController.deleteUser )




export default router