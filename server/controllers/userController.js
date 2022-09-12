import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const createToken = (email, _id) => {
  return jwt.sign({ email, _id }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    const token = createToken(existingUser.email, existingUser._id);

    if (!existingUser) return res.status(404).json({ message: 'User does not exist.' });

    const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials.' });

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'The password you have entered is incorrect' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = createToken(result.email, result._id);

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
