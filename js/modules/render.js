import createElem from './createElements.js';
const {createRow} = createElem;

export const renderCRM = () => {
  const btnAdd = document.querySelector(`.table-add`);
  const formOverlay = document.querySelector(`.overlay`);
  const btnDel = document.querySelector(`.table-order`);
  const checkboxtBtn = document.querySelector(`.checkbox-label`);
  const form = document.querySelector(`.form`);
  const tableTbody = document.querySelector(`.table-order`);
  const sumModal = document.querySelector(`.sumModal`);
  const URL = `https://lydian-romantic-litter.glitch.me/api/goods`;
  const error = document.querySelector(`.error`);
  sumModal.textContent = `$0`;

  return {
    btnAdd,
    formOverlay,
    btnDel,
    checkboxtBtn,
    form,
    tableTbody,
    URL,
    error,
    sumModal,
  };
};

export const renderContacts = (x, tableTbody, data) => {
  if (x) {
    console.warn(x, data);
    alert(`Что-то пошло не так...`);
  }
  const alllRow = data.goods.map(createRow);
  tableTbody.append(...alllRow);
};

export const sumContacts = (data) => {
  const allSumCRM = document.querySelector(`.effect`);
  const sumCRM = data.goods.reduce((sum, elem) =>
    sum + (elem.count * elem.price), 0);
  allSumCRM.textContent = `$${sumCRM}`;
};
