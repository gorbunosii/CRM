export const createRow = ({title, category, units, count,
  price, image, description, discount, id}) => {
  const tr = document.createElement('tr');
  tr.classList.add(`order`);

  const tdID = document.createElement('td');
  tdID.classList.add(`td-body`);
  const spanID = document.createElement(`span`);
  spanID.classList.add(`vendor-code__id`);
  spanID.textContent = id;
  tdID.append(spanID);

  const tdName = document.createElement('td');
  tdName.classList.add(`td-body`);
  tdName.textContent = title;

  const tdCategory = document.createElement('td');
  tdCategory.classList.add(`td-body`);
  tdCategory.textContent = category;

  const tdUnit = document.createElement('td');
  tdUnit.classList.add(`td-body`);
  tdUnit.textContent = units;

  const tdAmount = document.createElement('td');
  tdAmount.classList.add(`td-body`);
  tdAmount.textContent = count;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add(`td-body`);
  tdPrice.textContent = `$${price}`;

  const tdFinalPrice = document.createElement('td');
  tdFinalPrice.classList.add(`td-body`);
  tdFinalPrice.textContent = `$${count * price}`;

  const tdPicture = document.createElement('td');
  tdPicture.classList.add(`td-body`);
  const btnPicture = document.createElement('button');
  btnPicture.classList.add(`picture`);
  btnPicture.dataset.pic = image;
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

  tr.classList.add(`order`);
  tr.append(tdID, tdName, tdCategory, tdUnit, tdAmount,
      tdPrice, tdFinalPrice, tdPicture, tdPen, tdClear);

  return tr;
};


export default {
  createRow,
};
