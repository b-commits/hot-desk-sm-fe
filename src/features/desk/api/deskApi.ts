import axios from 'axios';

const DISH_ENDPOINT: string = '/dishes';

export const dishApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

// export const postDish = async (dish: Dish): Promise<Dish> => {
//   const response = await dishApi.post(DISH_ENDPOINT, convertToDTO(dish));
//   return response.data;
// };
