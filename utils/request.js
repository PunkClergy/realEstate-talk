import baseURL from './url';

const request = (url, method, data) =>
  fetch(`${baseURL}${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('Error:', error);
    });

export default request;
