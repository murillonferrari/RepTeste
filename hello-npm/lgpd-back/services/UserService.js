import userRepository from "../repositories/UserRepository.js"


const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}

const getUserbyId = (id) => {
    return userRepository.getUserbyId(id);
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const deleteUserbyId = (id) => {
    return userRepository.deleteUserbyId(id);
}


const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id,userModel);
}


const service = {
    saveUser,
    getUserbyId,
    getAllUsers,
    deleteUserbyId,
    updateUserById

}

export default service;