import moduleStorage from './serviceStorage';
import * as create from './createElements';

const {
  setStorage,
  removeStorage,
} = moduleStorage;

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener(`mouseenter`, () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener(`mouseleave`, () => {
      logo.textContent = text;
    });
  });
};

const moduleControl = (btnAdd, formOverlay) => {
  const openModel = () => {
    formOverlay.classList.add(`is-visible`);
  };

  const closeModal = () => {
    formOverlay.classList.remove(`is-visible`);
  };

  btnAdd.addEventListener(`click`, openModel);

  formOverlay.addEventListener(`click`, e => {
    const target = e.target;
    if (target === formOverlay ||
        target.classList.contains(`close`)) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener(`click`, () => {
    document.querySelectorAll(`.delete`).forEach(del => {
      del.classList.toggle(`is-visible`);
    });
  });

  list.addEventListener(`click`, e => {
    const target = e.target;
    const a = target.closest(`.contact`);
    removeStorage(a.cells[3].textContent);
    if (target.closest(`.del-icon`)) {
      target.closest(`.contact`).remove();
    }
  });
};

const sortControl = (headList) => {
  headList.addEventListener(`click`, e => {
    const target = e.target;
    const aaa = document.querySelector(`.table`);
    if (target.closest(`.table-name`)) {
      const sortTable = Array.from(aaa.rows).slice(1).sort((a, b) =>
        (a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1));
      aaa.tBodies[0].append(...sortTable);
    }
    if (target.closest(`.table-surname`)) {
      const sortTable = Array.from(aaa.rows).slice(1).sort((a, b) =>
        (a.cells[2].innerHTML > b.cells[2].innerHTML ? 1 : -1));
      aaa.tBodies[0].append(...sortTable);
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(create.createRow(contact));
};

const formControl = (form, list, closeModal) => {
  form.addEventListener(`submit`, e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);
    addContactPage(newContact, list);
    setStorage(newContact);
    form.reset();
    closeModal();
  });
};

export default {
  hoverRow,
  moduleControl,
  deleteControl,
  sortControl,
  formControl,
};
