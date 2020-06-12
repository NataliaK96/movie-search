import './clearForm';
import '../API/API_DATA';
import addSlides from '../carousel/addSlides';
import { response } from '../API/response';

const searchForm = document.querySelector('.search');
searchForm.onsubmit = () => {
  const control = document.querySelector('.form-control');
  response(control.value, 1).then((data) => {
    addSlides(data);
  });
  return false;
};

const formControl = document.querySelector('.form-control');
formControl.focus();
response('Dragon').then((data) => {
  addSlides(data);
});
