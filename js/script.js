import modulControl from './modules/control.js';
import {renderCRM, renderContacts} from './modules/render.js';
import modulStorage from './modules/serviceStorage.js';
const {fetchRequest} = modulStorage;

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
    URL,
    tableTbody,
    error,
    sumModal,
  } = renderCRM();

  fetchRequest(URL, {
    method: `get`,
    callback: renderContacts,
  });
  deleteControl(btnDel);
  visibleControl(btnAdd, formOverlay, error);
  formControl(checkboxtBtn, form, sumModal, formOverlay, tableTbody, error);
};

init();
