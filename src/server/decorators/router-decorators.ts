import * as uuidV4 from 'uuid/v4';
import { Router, NextFunction } from 'express';
import { createConstants } from 'utils/common';
import { IExpressRequest, IExpressResponse } from 'types';

export function customExpressMiddleWare(...callbacks: any[]) {
  return (req: IExpressRequest, res: IExpressResponse, next: NextFunction) => {
    const requestId = uuidV4();
    let count = 0;
    try {
      const nextFun = (error?: any) => {
        if (error) {
          return next(error);
        }
        if (count === callbacks.length) {
          return next();
        }
        const callback = callbacks[count];
        count += 1;
        callback(req, res, nextFun, { requestId });
        return true;
      };
      nextFun();
    } catch (error) {
      next(error);
    }
  };
}

export const HttpMethods = createConstants([
  'ALL',
  'DELETE',
  'GET',
  'POST',
  'PUT'
]);

const ROOT_ROUTE = 'ROOT_ROUTE';
const PATH_ROUTE = 'PATH_ROUTE';
const HTTP_METHOD = 'HTTP_METHOD';
const MIDDLEWARE = 'MIDDLEWARE';
const METHOD_MIDDLEWARE = 'METHOD_MIDDLEWARE';
const startsWithForwardSlashRegExp = /^\//;

/**
 * Collects METHOD middleware functions and creates a factory of it
 * @param {function} middleware- the middleware function to be added
 */
export function middlewareFactory(middleware: any) {
  // #TODO - need to update the params
  return function decorator(...params: any[]) {
    const isCalledWithoutParams =
      params[2] !== undefined && 'value' in params[2];

    if (isCalledWithoutParams) {
      const [target, propertyKey] = params;
      addMiddleware(target, propertyKey, middleware);
    } else {
      return (target: any, propertyKey: string) => {
        addMiddleware(target, name, middleware(...params));
      };
    }

    return null;
  };
}

/**
 * Collects CLASS middleware functions and creates a factory of it.
 * NOTE:- These middlewares are added before the method middlewares @see middlewareFactory
 * So class middlewares will be called before method middlewares whenever
 * a matching path is accessed
 * @param {function} middleware- the middleware function to be added
 */
export function classMiddlewareFactory(middleware: any) {
  return (target: any) => {
    if (!target[MIDDLEWARE]) {
      target[MIDDLEWARE] = [];
    }

    target[MIDDLEWARE].push(middleware);
  };
}

// #TODO - middleware type need to update
function addMiddleware(target: any, propertyKey: string, middleware: any) {
  if (!target[METHOD_MIDDLEWARE]) {
    target[METHOD_MIDDLEWARE] = {};
  }

  if (!target[METHOD_MIDDLEWARE][propertyKey]) {
    target[METHOD_MIDDLEWARE][propertyKey] = [];
  }

  target[METHOD_MIDDLEWARE][propertyKey].push(middleware);
}

/**
 * Class decorator used to define the router's mounting point.
 * @param rootRoute: string- router's mounting point
 * (as known from Express: `app.use('/mountingpoint', router)`).
 */
export const Root = (rootRoute: string) => {
  return (target: any) => {
    target[ROOT_ROUTE] = rootRoute;
  };
};

/**
 * Methods decorator that defines the routes within router's instance.
 * @param pathRoute: (string | RegEx) - defines the url path
 * (obeying exactly the same rules as in barebones Express).
 *
 * @param httpMethod: (HttpMethods | undefined) - defines the url path
 * (obeying exactly the same rules as in barebones Express).
 */
export const Path = (pathRoute: string, httpMethod: string) => {
  return (target: any, propertyKey: string) => {
    if (!target[PATH_ROUTE]) {
      target[PATH_ROUTE] = {};
    }

    target[PATH_ROUTE][propertyKey] = {
      PATH_ROUTE: pathRoute,
      HTTP_METHOD: (httpMethod || HttpMethods.GET).toLowerCase()
    };
  };
};

/**
 * Method decorator that sets HttpMethod as Get with given path
 * @param pathRoute: (string | RegEx) - defines the url path
 */
export const HttpGet = (pathRoute: string) => {
  return Path(pathRoute, HttpMethods.GET);
};

/**
 * Method decorator that sets HttpMethod as Post with given path
 * @param pathRoute: (string | RegEx) - defines the url path
 */
export const HttpPost = (pathRoute: string) => {
  return Path(pathRoute, HttpMethods.POST);
};

/**
 * Method decorator that sets HttpMethod as Put with given path
 * @param pathRoute: (string | RegEx) - defines the url path
 */
export const HttpPut = (pathRoute: string) => {
  return Path(pathRoute, HttpMethods.PUT);
};

/**
 * Method decorator that sets HttpMethod as Delete with given path
 * @param pathRoute: (string | RegEx) - defines the url path
 */
export const HttpDelete = (pathRoute: string) => {
  return Path(pathRoute, HttpMethods.DELETE);
};

/**
 * Attaches the router controllers to the main express application instance.
 * @param controllers: Function[] - controller classes (rest parameter)
 * decorated with @Root and @Path/@Use
 */
export function bindControllers(...controllers: any[]) {
  const router: Router = Router();

  controllers.forEach(Clazz => {
    const instance = new Clazz();
    const rootRoute = Clazz[ROOT_ROUTE];

    if (!rootRoute || !startsWithForwardSlashRegExp.test(rootRoute)) {
      throw new Error(
        'Class-level \'@Root\' decorator must be used with single string argument starting with forward slash (eg. \'/\' or \'/myRoot\')!'
      );
    }

    const pathRouteMethods = Clazz.prototype.PATH_ROUTE || {};
    const clazzMiddlewares = (Clazz[MIDDLEWARE] || []).reverse();
    const methodMiddlewares = Clazz.prototype.METHOD_MIDDLEWARE || {};

    Object.keys(pathRouteMethods).forEach(classMethod => {
      const pathRoute = pathRouteMethods[classMethod][PATH_ROUTE];
      const httpMethod = pathRouteMethods[classMethod][HTTP_METHOD];

      const middleWares = [
        ...clazzMiddlewares,
        ...(methodMiddlewares[classMethod] || []).reverse()
      ].map(mw => mw.bind(instance));

      router[httpMethod](
        pathRoute,
        customExpressMiddleWare(
          ...middleWares,
          instance[classMethod].bind(instance)
        )
      );
    });

    router.use(rootRoute, router);
  });

  return router;
}
