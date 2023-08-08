import mongoose from 'mongoose';

export async function connectMongoDB(){
    try {
        await mongoose.connect('mongodb+srv://gustavors:TE8y0uH1AXE3JpHs@gustavors-mongo.vaktpcb.mongodb.net/hero-tickets');
        console.log('ConnectMongoDB:', "Success!");
    } catch (error) {
        console.log('ConnectMongoDB:',error);
    }
}