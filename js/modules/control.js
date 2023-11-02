import modulStorage from './serviceStorage.js';
const {removeStorage} = modulStorage;
import showModal from './modalWindow.js';

const deleteControl = (btnDel, tableTbody) => {
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
  btnAdd.addEventListener(`click`, e => {
    const data = {};
    showModal(tableTbody, data);
  });
};

export default {
  deleteControl,
  visibleControl,
};
