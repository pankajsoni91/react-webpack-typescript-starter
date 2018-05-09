import axios from 'axios';

export function getDashboardData(): Promise<any> {
  return axios
    .get('/v1/api')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
