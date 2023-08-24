let data = JSON.parse(localStorage.getItem('users')) || [];

const setTableStorage = (contact) => {
  data = JSON.parse(localStorage.getItem(`users`)) || [];
  data.push(contact);
  localStorage.setItem(`users`, JSON.stringify(data));
};

const removeStorage = (name) => {
  for (let i = data.length; i--;) {
    if (data[i].name === name) {
      data.splice(i, 1);
    }
  }
  localStorage.setItem(`users`, JSON.stringify(data));
};

export default {
  data,
  setTableStorage,
  removeStorage,
};
