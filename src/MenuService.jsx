// MenuService.js

import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/menu/get/'; // Replace with your Django server URL

export const fetchMenuItems = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};
