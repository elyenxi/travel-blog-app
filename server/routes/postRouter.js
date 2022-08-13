import express from 'express';
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController.js';

const router = express.Router();

// GET all posts
router.get('/', getPosts);

// GET a post
router.get('/:id', getPost);

// CREATE new post
router.post('/', createPost);

// UPDATE a post
router.patch('/:id', updatePost);

// DELETE a post
router.delete('/:id', deletePost);

export default router;
