import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function auth(req,res,next){try{const token=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');if(!token)return res.status(401).json({message:'Login required'});const payload=jwt.verify(token,process.env.JWT_SECRET);req.user=await User.findById(payload.id).select('-passwordHash');if(!req.user)return res.status(401).json({message:'User no longer exists'});next();}catch{return res.status(401).json({message:'Invalid or expired token'});}}
export function allow(...roles){return (req,res,next)=>roles.includes(req.user?.role)?next():res.status(403).json({message:'You do not have permission for this action'});}
