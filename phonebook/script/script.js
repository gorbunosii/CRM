'use strict';

const {
  hoverRow,
  moduleControl,
  deleteControl,
  sortControl,
  formControl,
} = require('./modules/control');

const {
  renderPhoneBook,
  renderContacts,
} = require('./modules/render');

const {
data,
} = require('./modules/serviceStorage');

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
      headList,
    } = renderPhoneBook(app, title);

    const allRow = renderContacts(list, data);
    const {closeModal} = moduleControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    sortControl(headList);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}
