const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true ,
            useFindAndModify: false
        })
        console.log('Database is connect')
    } catch (err){
        console.log(err);
        process.exit(1);
    }
} 

module.exports = connect;