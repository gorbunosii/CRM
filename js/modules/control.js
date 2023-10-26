import modulStorage from './serviceStorage.js';
const {removeStorage, setTableStorage, fetchRequest} = modulStorage;
import {renderContacts} from './render.js';

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

const visibleControl = (btnAdd, formOverlay, error) => {
  formOverlay.addEventListener(`click`, e => {
    const target = e.target;
    if (target === formOverlay ||
          target.classList.contains(`close`)) {
      formOverlay.classList.remove(`is-visible`);
    }
    if (target.classList.contains(`close-error`)) {
      error.classList.remove(`is-visible`);
    }
  });

  btnAdd.addEventListener(`click`, () => {
    formOverlay.classList.add(`is-visible`);
  });
};

const formControl = (checkboxtBtn, form, sumModal,
    formOverlay, tableTbody, error) => {
  checkboxtBtn.addEventListener(`click`, e => {
    const checkboxInput = document.querySelector(`.checkbox-input`);
        e.target.closest(`.checkbox-label`) && checkboxInput.disabled === true ?
         checkboxInput.disabled = false : checkboxInput.disabled = true;
        checkboxInput.value = '';
  });

  form.addEventListener(`change`, () => {
    sumModal.textContent = `$${form.count.value * form.price.value}`;
  });

  form.addEventListener(`submit`, e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    fetchRequest(`https://lydian-romantic-litter.glitch.me/api/goods`, {
      method: `POST`,
      body: {
        tite: form.name.value,
        body: form.description.value,
      },
      callback(err) {
        console.log(err);
        if (err) {
          error.classList.add(`is-visible`);
          if (err !== ``) {
            const errorEff = document.querySelector(`.error-color`);
            errorEff.textContent = err;
          } else {
            `Что-то пошло не так`;
          }
          return;
        }
        form.reset();
        formOverlay.classList.remove(`is-visible`);
        setTableStorage(newContact);
        const obj = {goods: [newContact]};
        renderContacts(null, tableTbody, obj);
        sumModal.textContent = `$0`;
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export default {
  deleteControl,
  visibleControl,
  formControl,
};
