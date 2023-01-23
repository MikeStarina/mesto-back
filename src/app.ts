import express, { Request, Response, NextFunction, Errback} from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/users';
import cardRouter from './routes/cards';
import path from 'path';

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use((req: Request | any, res: Response, next: NextFunction) => {
    req.user = {
        _id: '63ce973d38e87586e391cbd5'
    }

    next();
});

app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});


//"_id": "63ce973d38e87586e391cbd5"
