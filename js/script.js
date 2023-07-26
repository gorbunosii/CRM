'use strict';

const btnAdd = document.querySelector(`.table-add`);
const formOverlay = document.querySelector(`.overlay`);
const btnDel = document.querySelector(`.table-order`);
const checkboxtBtn = document.querySelector(`.checkbox-label`);
const form = document.querySelector(`.form`);
const tableTbody = document.querySelector(`.table-order`);

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

  tr.classList.add(`order`);
  tr.append(tdID, tdName, tdCategory, tdUnit, tdAmount, tdPrice);

  return tr;
};

const addContactPage = (contact) => {
  const randomID = (x, y) => (Math.floor(Math.random() * (y - x)) + x);
  const ID = randomID(100000000, 999999999);
  const a = {ID};
  const obj = Object.assign({}, contact, a);
  console.log(obj);
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
});
