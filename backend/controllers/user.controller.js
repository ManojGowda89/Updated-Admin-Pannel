const UserModel = require("../models/Users")


const allUsers = async(req,res)=>{
    try {
        const users = await UserModel.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(err)
    }
} 

const singleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        return  res.json(user);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await UserModel.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            mobileNo: req.body.mobileNo,
            userImage : req.body.userImage,
            designation: req.body.designation,
            selectedGender: req.body.selectedGender,
            course: req.body.course,
            createDate: req.body.createDate
        });
      return  res.json(updatedUser);
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        return  res.json(newUser);
    } catch (error) {
        res.json(error);
    }
}


module.exports = {
    allUsers,singleUser,updateUser,deleteUser,createUser
}