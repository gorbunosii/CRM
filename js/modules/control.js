import modulStorage from './serviceStorage.js';
const {data, setTableStorage, removeStorage} = modulStorage;
import {renderContacts, sumContacts} from './render.js';

const deleteControl = (btnDel) => {
  btnDel.addEventListener(`click`, e => {
    if (e.target.closest(`.clear`)) {
      const a = e.target.closest(`.order`);
      removeStorage(a.cells[1].textContent);
      e.target.closest(`.order`).remove();
    }

    if (e.target.closest(`.picture`)) {
      const width = screen.width / 2 - 300;
      const height = screen.height / 2 - 300;
      const url = e.target.closest(`.picture`).dataset.pic;
      open(url, `_blank`, `top=${height},
       left=${width}, width=600, height=600`);
    }
  });
};

const visibleControl = (btnAdd, formOverlay) => {
  formOverlay.addEventListener(`click`, e => {
    const target = e.target;
    if (target === formOverlay ||
          target.classList.contains(`close`)) {
      formOverlay.classList.remove(`is-visible`);
    }
  });

  btnAdd.addEventListener(`click`, () => {
    formOverlay.classList.add(`is-visible`);
  });
};

const formControl = (checkboxtBtn, form, sumModal, formOverlay, tableTbody) => {
  checkboxtBtn.addEventListener(`click`, e => {
    const checkboxInput = document.querySelector(`.checkbox-input`);
        e.target.closest(`.checkbox-label`) && checkboxInput.disabled === true ?
         checkboxInput.disabled = false : checkboxInput.disabled = true;
        checkboxInput.value = '';
  });

  form.addEventListener(`submit`, e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    const randomID = (x, y) => (Math.floor(Math.random() * (y - x)) + x);
    const ID = randomID(100000000, 999999999);
    const numberID = {ID};
    const obj = {...newContact, ...numberID};
    setTableStorage(obj);
    renderContacts(tableTbody, [obj]);
    sumContacts(data);
    form.reset();
    formOverlay.classList.remove(`is-visible`);
    sumModal.textContent = `$0`;
  });

  form.addEventListener(`change`, () => {
    sumModal.textContent = `$${form.amount.value * form.price.value}`;
  });
};

export default {
  deleteControl,
  visibleControl,
  formControl,
};
