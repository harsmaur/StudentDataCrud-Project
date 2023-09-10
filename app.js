import express from 'express';
import cors from 'cors';
import connectdb from './db/connectdb.js';
import web from './routes/web.js'
import {join} from 'path';
const app = express();
const db_url = process.env.db_url || "mongodb+srv://mharsh228:GyBtNwhgSdvnAf2C@cluster0.hscxuc9.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || '3000';

//middlewares
  //for static files
app.use('/student',express.static(join(
    process.cwd(), "public"
)))
app.use('/student/edit',express.static(join(
    process.cwd(), "public"
)))
  //for getting data from page
  app.use(express.urlencoded({extended: false}))

  app.use(cors());
//connection to database
connectdb(db_url);

//set engine
app.set('view engine', 'ejs')

//load routes
app.use('/', web)

//listen to port
app.listen(port, () => {
        console.log('Listening to port 3000')
})