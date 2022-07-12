import express from "express"

import { postComment, deleteComment, postAnswerComment, deleteAnswerComment} from '../controllers/Comments.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.patch('/post/:id', auth, postComment)
router.patch('/delete/:id', auth, deleteComment)

router.patch('/postAnswerComment/:id', auth, postAnswerComment)
router.patch('/deleteAnswerComment/:id', auth, deleteAnswerComment)




export default router