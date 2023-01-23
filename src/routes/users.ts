import { Router } from 'express';
import { getUsers, createUser, getUser, updateUser, updateAvatar } from '../controllers/users';


const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

export default router;




