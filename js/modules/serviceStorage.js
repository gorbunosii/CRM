const allSumCRM = document.querySelector(`.effect`);
let finalSumCRM = Number(localStorage.getItem('sum')) || 0;
allSumCRM.textContent = `$${finalSumCRM}`;

const setStorage = (meaning) => {
  finalSumCRM = Number(localStorage.getItem('sum')) || 0;
  finalSumCRM += meaning;
  localStorage.setItem(`sum`, finalSumCRM);
  allSumCRM.textContent = `$${finalSumCRM}`;
};

export default {
  finalSumCRM,
  setStorage,
};
