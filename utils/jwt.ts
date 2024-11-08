// utils/jwt.ts
import jwt from 'jsonwebtoken';

export const createAccessToken = async (payload: object) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
  });
};

export const createRefreshToken = async (payload: object) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
  });
};

export const verifyAccessToken = async (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
};

export const verifyRefreshToken = async (token: string) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string);
};
