const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//connect to DB
// let source = process.env.DATABASE_url;
// console.log(source)

mongoose.connect(process.env.DATABASE_url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected to DB')
}).catch((error) => {
    console.log(`can not connect to database, ${error}`);
});


app.listen(3000, () => console.log('Server running......'));
