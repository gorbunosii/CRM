import serviceStorage from './serviceStorage.js';
import createElem from './createElements.js';
let {finalSumCRM} = serviceStorage;
const {createRow} = createElem;

const deleteControl = (btnDel) => {
  btnDel.addEventListener(`click`, e => {
    if (e.target.closest(`.clear`)) {
      const a = e.target.closest(`.order`);
      finalSumCRM -= Number(a.cells[6].textContent.slice(1));
      e.target.closest(`.order`).remove();
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

const addContactPage = (contact, tableTbody) => {
  const randomID = (x, y) => (Math.floor(Math.random() * (y - x)) + x);
  const ID = randomID(100000000, 999999999);
  const numberID = {ID};
  const obj = {...contact, ...numberID};
  tableTbody.append(createRow(obj));
};

const formControl = (checkboxtBtn, form, sumModal, formOverlay) => {
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
    addContactPage(newContact);
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
  addContactPage,
  formControl,
};
