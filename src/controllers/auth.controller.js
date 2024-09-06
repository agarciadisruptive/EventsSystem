import {createAccessToken} from '../libs/jwt.js'
import {TOKEN_SECRET} from '../config.js';
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const register = async (req, res) => {
  const {username, email, password} = req.body
  try {
    const userFoundUsername = await User.findOne({username});
    if (userFoundUsername)
      return res.status(400).json(["The username already exists"]);
    const userFoundEmail = await User.findOne({email});
    if (userFoundEmail)
      return res.status(400).json(["The email already exists"]);
    const hash_password = await bcrypt.hash(password, 10)
    const newUser = new User({
      username,
      email,
      password: hash_password
    });
    const user = await newUser.save();
    const token = await createAccessToken({id: user._id})

    res.cookie('token', token);
    res.json({
        id: user._id,
        username: user.username,
        email: user.email,
        created_at: user.createdAt,
        updated_at: user.updatedAt
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const login = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message: "User not found"});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({message: "Incorrect password"});

    const token = await createAccessToken({id: user._id})
  
    res.cookie('token', token)
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      created_at: user.createdAt,
      updated_at: user.updatedAt
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {expires: new Date(0)});
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const user = await User.findById(req.user.id)
  if (!user) return res.status(400).json({message: "User not found"});
  return res.json({
    id: user._id,
    username: user.username,
    email: user.email,
    created_at: user.createdAt,
    updated_at: user.updatedAt
  });
}

export const verifyToken = async (req, res) => {
  const {token} = req.cookies;
  if (!token) return res.status(401).json({message: "Unauthorized"});
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({message: "Unauthorized"});
    const userFound = User.findById(user.id);
    if (!userFound) return res.status(401).json({message: "Unauthorized"});
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  });
};