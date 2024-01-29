import createElem from './createElements.js';
const {createRow} = createElem;

export const renderCRM = () => {
  const btnAdd = document.querySelector(`.table-add`);
  const btnFilter = document.querySelector(`.button-funnel`);
  const inputSearch = document.querySelector(`.table-search`);
  const btnDel = document.querySelector(`.table-order`);
  const tableTbody = document.querySelector(`.table-order`);
  const URL = `https://lydian-romantic-litter.glitch.me/api/goods`;

  return {
    btnAdd,
    btnFilter,
    inputSearch,
    btnDel,
    tableTbody,
    URL,
  };
};

export const renderContacts = (x, tableTbody, data) => {
  if (x) {
    console.warn(x, data);
    alert(`Что-то пошло не так...`);
  }
  const alllRow = data.goods.map(createRow);
  tableTbody.append(...alllRow);

  return `Успех`;
};

export const sumContacts = (data) => {
  const allSumCRM = document.querySelector(`.effect`);
  const sumCRM = data.goods.reduce((sum, elem) =>
    sum + (elem.count * elem.price), 0);
  allSumCRM.textContent = `$${sumCRM}`;
};
