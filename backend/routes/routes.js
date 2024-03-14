const express = require('express');
const { allUsers, singleUser, updateUser, deleteUser, createUser } = require('../controllers/user.controller');



const router = express.Router()


router.get('/', allUsers)

router.get("/getdata/:id", singleUser)

router.put("/updatedata/:id",updateUser)

router.delete('/deletedata/:id',deleteUser)
    
router.post("/createuser",createUser)



module.exports = router