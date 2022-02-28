/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request Logged By Function Middleware...`);
  console.log("Request IP address: ",req.ip);
  console.log("Request Body : ",req.body);
  next();
};