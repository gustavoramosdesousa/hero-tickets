import mongoose from "mongoose";
import { UserRepository } from "./UserRepository";
import { User } from "../entities/User";

const eventSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const UserModel = mongoose.model('User', eventSchema);

class UserRepositoryMongoose implements UserRepository{
    async verifyIsUserExists(email: string): Promise<User | undefined> {
        const findUser = await UserModel.findOne({email}).exec();
        return findUser ? findUser.toObject() : undefined;
    }
    async findUserById(id:string): Promise<User | undefined> {
        const findUser = await UserModel.findOne({id}).exec();
        return findUser ? findUser.toObject() : undefined;
    }

    async add(user : User): Promise<User>{
        const userModel = new UserModel(user);

        await userModel.save();
        return user;
    };

}
export {UserRepositoryMongoose};