import express from 'express';
import connectDb from './database/mongoDb';
import morgan from 'morgan';
import user from './routes/user'
import cors from 'cors';

connectDb()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/', user);

// app.get('/', (req, res) => {
//     res.send('Well done!');
// })

const corsOptions = {
	origin: 'http://localhost:4200',
	credentials: true,//access-control-allow-credentials:true
	optionSuccessStatus: 200
};
app.use(cors(corsOptions));

app.listen(4000, () => {
    console.log('The application is listening on port 4000!');
})

