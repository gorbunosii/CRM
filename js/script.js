import modulControl from './modules/control.js';
import {renderCRM} from './modules/render.js';

const {
  deleteControl,
  visibleControl,
  addContactPage,
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

  deleteControl(btnDel);
  visibleControl(btnAdd, formOverlay);
  formControl(checkboxtBtn, form, sumModal, formOverlay);
  addContactPage(tableTbody);
};

init();
