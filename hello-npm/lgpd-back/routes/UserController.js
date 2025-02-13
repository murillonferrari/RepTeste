import express from 'express';
let router = express.Router();

import userService from "../services/UserService.js";


router.post("/addUser", async function(req, res) {
    const userModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const user = await userService.saveUser(userModel);
    return res.status(200).json(user);
});


router.get("/getAllUsers", async function (req,res) {
    const allUser = await userService.getAllUsers();
    return res.status(200).json(allUser)
    
});


router.get("/user/:id", async function (req,res) {
    const user = await userService.getUserbyId(req.params.id);
    return res.status(200).json(user)
    
});

router.delete("/deleteUser/:id", async function (req,res) {
    const allUser = await userService.deleteUserbyId();
    return res.status(200).json(user)
    
});


router.put("/updateUser:/id", async function(req, res) {
    const userModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const user = await userService.updateUserById(req.params.id, userModel);
    return res.status(200).json(user);
});


export default router;