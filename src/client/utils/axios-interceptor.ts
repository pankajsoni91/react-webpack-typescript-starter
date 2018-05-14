import * as _ from 'lodash';
import axios from 'axios';
import { HEADERS, COOKIES, ERROR_MESSAGE } from 'constants/';

import history from './history';
import cookies from './cookies';
import loader from './loader';

axios.interceptors.request.use(
  request => {
    const skipLoader: boolean | undefined = _.get(request, 'skipLoader');

    if (!skipLoader) {
      loader(true);
    }
    request.headers.common[HEADERS.XSRF] = cookies.get(COOKIES.XSRF);
    return request;
  },
  error => {
    loader(false);

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    loader(false);
    const { redirectURI } = _.get(response, 'data', {});
    if (redirectURI) {
      window.location.href = redirectURI;
    }
    return response;
  },
  error => {
    loader(false);
    const { redirectURI, refresh } = _.get(error, 'response.data', {});
    if (refresh && Number(_.get(error, 'response.status')) === 500) {
      return window.location.reload();
    }

    if (redirectURI) {
      window.location.href = redirectURI;
    } else if (!_.get(error, 'config.skipErrorPage')) {
      if (!process.env.STORYBOOK_GIT_ORIGIN && !error.__CANCEL__) {
        history.push('/error');
      }
    }

    if (error.response) {
      error.response.message = error.response
        ? (ERROR_MESSAGE[error.response.status] as string)
        : 'Something went wrong. Please try after sometime.';
    }
    return Promise.reject(error.response);
  }
);
