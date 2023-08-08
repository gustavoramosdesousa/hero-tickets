import mongoose from 'mongoose';

export async function connectMongoDB(){
    try {
        await mongoose.connect('mongodb+srv://<user>:<pass>@gustavors-mongo.vaktpcb.mongodb.net/hero-tickets');
        console.log('ConnectMongoDB:', "Success!");
    } catch (error) {
        console.log('ConnectMongoDB:',error);
    }
}