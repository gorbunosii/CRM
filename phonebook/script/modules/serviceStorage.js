'use strict';

let data = JSON.parse(localStorage.getItem('users')) || [];

const getStorage = (ar) => JSON.parse(localStorage.getItem(ar)) || [];

const setStorage = (contact) => {
  data = getStorage(`users`);
  data.push(contact);
  localStorage.setItem(`users`, JSON.stringify(data));
};

const removeStorage = (phone) => {
  for (let i = data.length; i--;) {
    if (data[i].phone === phone) {
      data.splice(i, 1);
    }
  }
  localStorage.setItem(`users`, JSON.stringify(data));
};

module.exports = {
data,
getStorage,
setStorage,
removeStorage,
};
