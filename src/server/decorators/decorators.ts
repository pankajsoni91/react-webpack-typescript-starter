import * as _ from 'lodash';
// import { classMiddlewareFactory } from './router-decorators';
// import { hasAccess } from 'src/server/middlewares/acl';
// import { validateXSRFToken } from 'src/server/middlewares/auth';
// import { validateVersion } from 'src/server/middlewares/validate-version';
// import { postAclFilter } from 'utils/acl-engine';
// import { API_HEADERS } from 'src/server/constants';

// import {
//   validate,
// } from 'validators/validate';

function defaultErrorHandler(...args: any[]) {
  const [error, , , next, payload] = args;
  const requestId = _.get(payload, 'requestId');

  if (requestId) {
    error.requestId = requestId;
  }
  next(error);
}

/**
 * METHOD MIDDLEWARE DECORATORS
 */
// export const ValidateRequest = middlewareFactory(validate);

// export const Authorize = (...args: any[]) => middlewareFactory(hasAccess(...args));

/**
 * CLASS MIDDLEWARE DECORATORS
 */
// export const XsrfValidation = classMiddlewareFactory(validateXSRFToken);
// export const VersionValidation = classMiddlewareFactory(validateVersion);

/**
 * Tells if the prop is a Promise
 *
 * @method isPromise
 * @param  { any }  prop
 * @return { Boolean }
 */
function isPromise(prop: any) {
  return (
    prop !== null &&
    (typeof prop === 'object' || typeof prop === 'function') &&
    typeof prop.then === 'function'
  );
}

/**
 * DEFINATION CHANGING DECORATORS
 */

/**
 * This wraps a function around try/catch with the given error handler.
 * NOTE:- This decorator also handles "async functions" as async functions
 * return rejected promises instead of an error.
 *
 * Error Handler Signature = (error, req, res, next) => { }
 *
 * @param {function} errorHandler Error handling function
 */
/* tslint:disable-next-line */
export const TryCatch = (errorHandler: any = defaultErrorHandler) => {
  if (errorHandler && !_.isFunction(errorHandler)) {
    throw Error(
      `The ErrorHandler should be a function. ${JSON.stringify(
        errorHandler
      )} is not a function`
    );
  }

  return (_target: any, _key: any, descriptor: any) => {
    const fn = descriptor.value;
    descriptor.value = (...args: any[]) => {
      try {
        const r = fn.apply(this, args);
        if (isPromise(r)) {
          r.catch((error: any) => {
            errorHandler(error, ...args);
          });
        }
        return r;
      } catch (error) {
        errorHandler(error, ...args);
      }
      return null;
    };
  };
};

/**
 *
 * Sends the response as JSON.
 *
 * @param {function} beforeSend To do anything before sending the response
 * @param {function} afterSend To do anything after sending the response
 */
export const SendJSON = (_target: any, _key: any, descriptor: any): any => {
  const fn = descriptor.value;

  descriptor.value = (...args: any[]) => {
    const r = fn.apply(this, args);
    const sendResponse = ({ result, res, payload }: any) => {
      // const requestId = _.get(payload, 'requestId');
      // if (requestId) {
      // res.setHeader(API_HEADERS.REQUEST_ID, requestId)
      // };
      res.send(result);
    };
    // if promise then resolve by then
    if (isPromise(r)) {
      return r.then((result: any) => sendResponse({ result, ...args }));
    }
    return sendResponse({ r, ...args });
  };
};

/**
 * Sends the file
 * @param {string} fileName
 * @param {object} headers { headerName: headerValue }
 */
// export const SendFile = (fileName, headers = {}) =>
//   (target, key, descriptor) => {
//     const fn = descriptor.value;

//     descriptor.value = (...args) => {
//       const r = fn.apply(this, args);
//       const fName = _.isFunction(fileName) ? fileName(...args) : fileName;

//       const sendFile = (file, req, res) => {
//         res.writeHead(200, {
//           'Content-Type': _.get(headers, 'Content-Type', 'application/octet-stream'),
//           'Content-Disposition': `attachment; filename=${fName}`
//         });
//         res.write(file);
//         res.end();
//       };

//       // if promise then resolve by then
//       if (isPromise(r)) {
//         return r.then((file) => sendFile(file, ...args));
//       }

//       return sendFile(r, ...args);
//     };
//   };

/**
 *
 * ACL based filter of JSON results.
 *
 */
// export const AclFilter = (target, key, descriptor) => {
//   const fn = descriptor.value;

//   descriptor.value = async (...args) => {
//     const r = fn.apply(this, args);
//     const applyFilter = (result, req) => postAclFilter(req, result);
//     // if promise then resolve by then
//     if (isPromise(r)) {
//       const filteredResult = await r.then((result) => applyFilter(result, ...args));
//       return filteredResult;
//     }

//     return applyFilter(r, ...args);
//   };
// };

// (error, req, res, next, payload?)
export const errorHandler = (...args: any[]) => {
  const [error, , , next, payload] = args;
  const requestId = _.get(payload, 'requestId');

  if (requestId) {
    error.requestId = requestId;
  }
  next(error);
};
