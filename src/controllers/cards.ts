import { Request, Response, NextFunction } from 'express';
import card from '../models/card';


export const getCards = (req: Request, res: Response, next: NextFunction) => {
    return card.find({}).then((cards) => res.send({ data: cards })).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})
}

export const deleteCard = (req: Request, res: Response) => {
    const { cardId } = req.params;
    return card.deleteOne({ cardId }).then((card) => { res.send({ data: card }) }).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})
}

export const createCard = (req: Request | any, res: Response) => {

    const { name, link } = req.body;
    const owner = req.user._id;

    return card.create({ name, link, owner }).then((card) => { res.send({ data: card }) }).catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})

}



export const likeFunc = (req: Request | any, res: Response) => {


    return card.findByIdAndUpdate(
        req.params.cardId,
        { $addToSet: { likes: req.user._id } },
        { new: true },
      )
      .then((newCard) => { res.send( { data: newCard }) })
      .catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})


}


export const dislikeFunc = (req: Request | any, res: Response) => {
    return card.findByIdAndUpdate(
        req.params.cardId,
        { $pull: { likes: req.user._id } },
        { new: true },
      )
      .then((newCard) => { res.send({ data: newCard }) })
      .catch(() => {res.status(500).send({ message: 'Произошла ошибка' })})
}