import { Request, Response } from 'express';

export interface IExpressRequest extends Request {
  user: any;
  session: any;
}

// #TODO - need to remove
export interface IExpressResponse extends Response {
  test?: any;
}
