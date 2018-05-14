import { Router, Request, Response, NextFunction } from 'express';
import { getData } from 'services';

// const router: Router = Router();
// router.get('/', (req: Request, res: Response) => {
//   const { value } = req.query;
//   res.json({
//     value
//   });
// });

// router.get('/axiosTest', async (req: Request, res: Response) => {
//   const response = await getData();
//   res.json({
//     value: response
//   });
// });

// export default router;

import { HttpGet, Root, bindControllers } from 'decorators/router-decorators';
import { IExpressResponse, IExpressRequest } from 'types';

@Root('/')
class Test {
  @HttpGet('/')
  public async getApiTest(
    req: IExpressRequest,
    res: IExpressResponse,
    next: NextFunction
  ) {
    const { value } = req.query;
    res.json({
      value
    });
  }

  @HttpGet('/axiosTest')
  public async getAxiosTest(
    req: IExpressRequest,
    res: IExpressResponse,
    next: NextFunction
  ) {
    const response = await getData();
    res.json({
      value: response
    });
  }
}

export default bindControllers(Test);
