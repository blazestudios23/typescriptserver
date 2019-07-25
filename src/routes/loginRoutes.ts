import { Router, Request, Response } from "express";
import { NextFunction } from "connect";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

export { router };
