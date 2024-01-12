import sendRequest from './send-request.js';


const BASE_URL = '/api/items';

export function getAll() {
  console.log(BASE_URL);
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}