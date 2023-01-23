import mongoose from 'mongoose';


interface ICard {
    name: String;
    link: String;
    owner: mongoose.Schema.Types.ObjectId;
    likes: Array<mongoose.Schema.Types.ObjectId>;
    createdAt: Date;
}


const cardSchema = new mongoose.Schema<ICard>({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    link: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
            default: [],
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})


export default mongoose.model<ICard>('card', cardSchema);