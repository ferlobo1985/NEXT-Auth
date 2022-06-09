import { MongoClient} from 'mongodb';

export async function connectToDb(){
    const dbClient = await MongoClient.connect(`mongodb+srv://admin:c13zVMmPAfat8A5o@cluster0.kb72pix.mongodb.net/?retryWrites=true&w=majority`);
    return dbClient;
}