import { Request, Response } from 'express';
import user from '../models/user';




export const getUsers = (req: Request, res: Response) => {

    return user.find({}).then((users) => res.send({ data: users })).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})
}

export const createUser = (req: Request, res: Response) => {

    const { name, about, avatar } = req.body;

    return user.create({ name, about, avatar }).then((user) => { res.send({ data: user }) }).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})
}

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    return user.findOne({ id }).then((user) => { res.send({ data: user }) }).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })});
}



export const updateUser = (req: Request | any, res: Response) => {
    const update = {
        name: req.body.name,
        about: req.body.about
    }
    const filter = { _id: req.user._id };

    return user.findOneAndUpdate(filter, update, { new: true})
        .then((updatedUser: any) => { res.send({ data: updatedUser })})
        .catch(() => {res.status(500).send({ message: 'Произошла ошибка' })});
}



export const updateAvatar = (req: Request | any, res: Response) => {
    const update = {
        avatar: req.body.avatar,
    }
    const filter = { _id: req.user._id };

    return user.findOneAndUpdate(filter, update, { new: true})
        .then((updatedUser: any) => { res.send({ data: updatedUser })})
        .catch(() => {res.status(500).send({ message: 'Произошла ошибка' })});
}


