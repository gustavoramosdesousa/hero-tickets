import mongoose from 'mongoose';

export async function connectMongoDB(){
    try {
        await mongoose.connect('SEU_N');
        //console.log('ConnectMongoDB:', "Success!");
    } catch (error) {
        console.log('ConnectMongoDB:',error);
    }
}