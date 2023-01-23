import { Router } from 'express';
import { getCards, deleteCard, createCard, likeFunc, dislikeFunc } from '../controllers/cards';



const router = Router();

router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', likeFunc);
router.delete('/:cardId/likes', dislikeFunc);

export default router;




