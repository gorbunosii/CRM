import modulControl from './modules/control.js';
import {renderPhoneBook, renderContacts} from './modules/render.js';
import moduleStorage from './modules/serviceStorage.js';

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
