const btnkerajaan = document.querySelector('.btn-kerajaan');
const btnpembangkang = document.querySelector('.btn-pembangkang');
const btnpelawat = document.querySelector('.btn-pelawat');
const btnsubmit = document.querySelector('form');

function selectKerajaan(e) {
  window.location = 'kerajaan-2.html';
};

function selectPembangkang(e) {
  window.location = 'pembangkang-2.html';
};

function selectPelawat(e) {
  window.location = 'list.html';
};
 
btnkerajaan.addEventListener('click', selectKerajaan);

btnpembangkang.addEventListener('click', selectPembangkang);

btnpelawat.addEventListener('click', selectPelawat);
