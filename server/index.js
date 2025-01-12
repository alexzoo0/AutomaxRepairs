import mongoose from "mongoose";
import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import reviews from './src/routes/routes.js';

const app = express();

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/reviews', reviews);





const CONNECTION_URL = 'mongodb+srv://alexzoo:Alexzoo%40$2784@cluster0.iiwud.mongodb.net/reviews';

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => app.listen( PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))) .catch(error => console.log(`${error} did not connect`));


