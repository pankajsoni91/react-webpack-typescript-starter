import axios from 'axios';

// #TODO - need to add the config from configuration file
// #TODO - need to add the axios interceptor
export async function getData() {
  try {
    const response = await axios.get(
      'https://baconipsum.com/api/?type=meat-and-filler'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
