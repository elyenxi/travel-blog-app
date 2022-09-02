import Post from '../models/postModel.js';

const getPosts = async (req, res) => {
  try {
    const result = await Post.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Post.findById(id);

    if (!result) return res.sendStatus(404);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const result = req.body;

  try {
    const newPost = await Post.create(result);
    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  try {
    const result = await Post.findByIdAndUpdate(_id, post, { new: true });

    if (!result) return res.sendStatus(404);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const result = await Post.findByIdAndDelete(_id);

    if (!result) return res.sendStatus(404);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const likePost = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const post = await Post.findById(_id);
    const result = await Post.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getPosts, getPost, createPost, updatePost, deletePost, likePost };
