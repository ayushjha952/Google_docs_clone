import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://ayush_docs:ayush_docs_9023@gdocs-clone.sxx80.mongodb.net/GDOCS_CLONE?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

