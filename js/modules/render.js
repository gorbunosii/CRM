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
  sumModal.textContent = `$0`;

  return {
    btnAdd,
    formOverlay,
    btnDel,
    checkboxtBtn,
    form,
    tableTbody,
    sumModal,
  };
};

export const renderContacts = (tableTbody, data) => {
  const alllRow = data.map(createRow);
  tableTbody.append(...alllRow);
};

export const sumContacts = (data) => {
  const allSumCRM = document.querySelector(`.effect`);
  const sumCRM = data.reduce((sum, elem) =>
    sum + (elem.amount * elem.price), 0);
  allSumCRM.textContent = `$${sumCRM}`;
};
