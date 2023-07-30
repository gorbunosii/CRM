'use strict';

const btnAdd = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const btnDel = document.querySelector(`.table-order`);
const checkboxtBtn = document.querySelector(`.checkbox-label`);
const form = document.querySelector(`.form`);
const tableTbody = document.querySelector(`.table-order`);
const allSumCRM = document.querySelector(`.effect`);
const sumModal = document.querySelector(`.sumModal`);

let finalSumCRM = 0;
allSumCRM.textContent = `$0`;
sumModal.textContent = `$0`;

const createRow = ({name, category, unit, amount,
  price, discount, description, ID}) => {
  const tr = document.createElement('tr');
  tr.classList.add(`order`);

  const tdID = document.createElement('td');
  tdID.classList.add(`td-body`);
  const spanID = document.createElement(`span`);
  spanID.classList.add(`vendor-code__id`);
  spanID.textContent = ID;
  tdID.append(spanID);

  const tdName = document.createElement('td');
  tdName.classList.add(`td-body`);
  tdName.textContent = name;

  const tdCategory = document.createElement('td');
  tdCategory.classList.add(`td-body`);
  tdCategory.textContent = category;

  const tdUnit = document.createElement('td');
  tdUnit.classList.add(`td-body`);
  tdUnit.textContent = unit;

  const tdAmount = document.createElement('td');
  tdAmount.classList.add(`td-body`);
  tdAmount.textContent = amount;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add(`td-body`);
  tdPrice.textContent = `$${price}`;

  const tdFinalPrice = document.createElement('td');
  tdFinalPrice.classList.add(`td-body`);
  tdFinalPrice.textContent = `$${amount * price}`;

  const tdPicture = document.createElement('td');
  tdPicture.classList.add(`td-body`);
  const btnPicture = document.createElement('button');
  btnPicture.classList.add(`picture`);
  tdPicture.append(btnPicture);

  const tdPen = document.createElement('td');
  tdPen.classList.add(`td-body`);
  const btnPen = document.createElement('button');
  btnPen.classList.add(`pen`);
  tdPen.append(btnPen);

  const tdClear = document.createElement('td');
  tdClear.classList.add(`td-body`);
  const btnClear = document.createElement('button');
  btnClear.classList.add(`clear`);
  tdClear.append(btnClear);

  finalSumCRM += Number(tdFinalPrice.textContent.slice(1));
  allSumCRM.textContent = `$${finalSumCRM}`;

  tr.classList.add(`order`);
  tr.append(tdID, tdName, tdCategory, tdUnit, tdAmount,
      tdPrice, tdFinalPrice, tdPicture, tdPen, tdClear);

  return tr;
};

const addContactPage = (contact) => {
  const randomID = (x, y) => (Math.floor(Math.random() * (y - x)) + x);
  const ID = randomID(100000000, 999999999);
  const numberID = {ID};
  const obj = {...contact, ...numberID};
  tableTbody.append(createRow(obj));
};

btnAdd.addEventListener(`click`, () => {
  formOverlay.classList.add(`is-visible`);
});

formOverlay.addEventListener(`click`, e => {
  const target = e.target;
  if (target === formOverlay ||
    target.classList.contains(`close`)) {
    formOverlay.classList.remove(`is-visible`);
  }
});

btnDel.addEventListener(`click`, e => {
  if (e.target.closest(`.clear`)) {
    const a = e.target.closest(`.order`);
    finalSumCRM -= Number(a.cells[6].textContent.slice(1));
    allSumCRM.textContent = `$${finalSumCRM}`;
    e.target.closest(`.order`).remove();
  }
});

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
