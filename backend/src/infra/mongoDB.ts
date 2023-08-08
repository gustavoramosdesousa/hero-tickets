import mongoose from 'mongoose';

export async function connectMongoDB(){
    try {
        await mongoose.connect(URL);
        console.log('ConnectMongoDB:', "Success!");
    } catch (error) {
        console.log('ConnectMongoDB:',error);
    }
}