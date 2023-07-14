import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});