require('dotenv').config();
const mongoose = require('mongoose');

// const DB = process.env.DB_URL;
mongoose.connect(`mongodb+srv://paystackProto:${process.env.mongoKey}@sharedfest.mncskat.mongodb.net/?retryWrites=true&w=majority`, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('mongoose is live!'))
   .catch(err => console.log(err));

   module.exports = mongoose;

   // 'mongodb://localhost:27017/paymentsDB'