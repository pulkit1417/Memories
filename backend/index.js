import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

//TO PROPERLY SEND OUR REQUESTS AND WE ALSO LIMIT THE SIZE AS WE NEED TO SEND THE IMAGES TO THE DATABASE
app.use(bodyParser.json({limit: "30mb", extended:true}));  
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://guptapulkit2408:XyKKrMxatRdPP3NN@cluster0.hssss.mongodb.net/'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))  
    .catch((error) => console.log(error.message)
);


app.get('/', (req, res) => {
    res.send('hello');
});