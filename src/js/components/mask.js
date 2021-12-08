const telInputs = document.querySelectorAll('input[type="tel"]');
const input = new Inputmask({ mask: '+ 7 (999) 999 99 99', showMaskOnHover: false, });
input.mask(telInputs);