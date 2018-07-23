/**
 * xhr for login
 */

import xhr from 'utils/xhr';

export function toLogin (data) {
  // console.log(data);
  return new Promise((resolve, reject) => {
    xhr({
      url: 'api/login',
      type: 'POST',
      data,
      success: res => {
        resolve(res);
      },
      error: err => {
        reject(err);
      }
    });
  });
}

export function toLogout () {
  return new Promise((resolve, reject) => { 
    xhr({
      url: 'api/logout',
      type: 'GET',
      data: {t: '123'},
      success: res => {
        resolve(res);
      },
      error: err => {
        reject(err);
      }
    });
  });
}

