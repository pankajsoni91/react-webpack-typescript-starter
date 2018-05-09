import axios from 'axios';

// #TODO - need to add the axios interceptor
export function getDashboardData(): Promise<any> {
  return axios
    .get('/v1/api', {
      params: {
        value: 10
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
