import axios from 'axios';

const API_KEY = 'e37b8c8366c148d1902accf9f72574c8';

export const api = axios.create({
  baseURL: 'https://api2.shop.com/AffiliatePublisherNetwork/v2',
  headers: {
    api_key: API_KEY,
  },
  params: {
    publisherId: 'TEST',
    locale: 'en_US',
  },
});
