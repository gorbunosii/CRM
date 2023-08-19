import modulControl from './modules/control.js';
import {renderCRM, renderContacts, sumContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {data} = modulStorage;

const {
  deleteControl,
  visibleControl,
  formControl} = modulControl;

const init = () => {
  const {
    btnAdd,
    formOverlay,
    btnDel,
    checkboxtBtn,
    form,
    tableTbody,
    sumModal,
  } = renderCRM();

  renderContacts(tableTbody, data);
  deleteControl(btnDel);
  visibleControl(btnAdd, formOverlay);
  formControl(checkboxtBtn, form, sumModal, formOverlay, tableTbody);
  sumContacts(data);
};

init();
