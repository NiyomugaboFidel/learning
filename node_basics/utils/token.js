
import jwt from 'jsonwebtoken';

const security_key = process.env.SECURITY_KEY || "security_key"
export const generateToken = (payload)=>{
 
  return jwt.sign(payload, security_key, { expiresIn: '3h' } );

}




