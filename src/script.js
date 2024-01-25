import modulControl from './script/control';
import {renderPhoneBook, renderContacts} from './script/render';
import moduleStorage from './script/serviceStorage';

import './scss/index.scss';

const {
  hoverRow,
  moduleControl,
  deleteControl,
  sortControl,
  formControl} = modulControl;

const {
  data,
} = moduleStorage;

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
