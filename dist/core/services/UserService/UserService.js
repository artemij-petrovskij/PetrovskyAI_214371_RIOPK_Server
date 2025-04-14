"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    createNewUser(dto) {
        //console.log(dto)
        //const newUser = this.userRepository.add(dto)
    }
}
exports.UserService = UserService;
//const test = new imlp(new 'email', 'pass') 
