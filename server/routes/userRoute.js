import express from 'expres';
import { signIn, signUp } from '../../client/src/actions/auth';
import {} from '../controllers/userController';

const router = express.Router();

router.post('/signIn', signIn);
router.post('/singUp', signUp);
