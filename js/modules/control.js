import modulStorage from './serviceStorage.js';
const {removeStorage} = modulStorage;
import showModalBTN from './modalWindow.js';
const {showModal, deleteTrue} = showModalBTN;

const deleteControl = (btnDel, tableTbody) => {
  btnDel.addEventListener(`click`, async e => {
    if (e.target.closest(`.clear`)) {
      const value = await deleteTrue();
      if (value) {
        const a = e.target.closest(`.order`);
        removeStorage(a.cells[1].textContent);
        e.target.closest(`.order`).remove();
      }
    }

    if (e.target.closest(`.picture`)) {
      const width = screen.width / 2 - 300;
      const height = screen.height / 2 - 300;
      const url = e.target.closest(`.picture`).dataset.pic;
      open(url, `_blank`, `top=${height},
       left=${width}, width=600, height=600`);
    }

    if (e.target.closest(`.pen`)) {
      const a = e.target.closest(`.order`);
      const b = a.cells[0].textContent;
      const fetchID = async () => {
        const response = await fetch(`https://lydian-romantic-litter.glitch.me/api/goods/${b}`);
        const data = await response.json();
        showModal(tableTbody, data);
      };
      fetchID();
    }
  });
};

const visibleControl = (btnAdd, tableTbody) => {
  btnAdd.addEventListener(`click`, () => {
    const data = {};
    showModal(tableTbody, data);
  });
};

const inputControl = (input, tableTbody) => {
  const foo = async () => {
    const response = await fetch(`https://lydian-romantic-litter.glitch.me/api/goods/${input.value}`);
    const data = await response.json();
    showModal(tableTbody, data);
  };
  function debounce(func, delay) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
  const a = debounce(foo, 300);
  input.addEventListener(`input`, a);
};

const filterControl = (btnFilter) => {
  btnFilter.addEventListener(`click`, () => {
    const aaa = document.querySelector(`table`);
    const sortTable = Array.from(aaa.rows).slice(1).sort((a, b) =>
      (a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1));
    aaa.tBodies[0].append(...sortTable);
  });
};

export default {
  deleteControl,
  visibleControl,
  inputControl,
  filterControl,
};
