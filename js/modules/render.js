
const renderCRM = () => {
  const btnAdd = document.querySelector(`.table-add`);
  const formOverlay = document.querySelector(`.overlay`);
  const btnDel = document.querySelector(`.table-order`);
  const checkboxtBtn = document.querySelector(`.checkbox-label`);
  const form = document.querySelector(`.form`);
  const tableTbody = document.querySelector(`.table-order`);
  const sumModal = document.querySelector(`.sumModal`);
  const allSumCRM = document.querySelector(`.effect`);
  allSumCRM.textContent = `$${finalSumCRM}`;
  sumModal.textContent = `$0`;
};
