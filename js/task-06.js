const validationInput = document.getElementById('validation-input');
  function checkInput() {
    const enteredValue = validationInput.value.trim();
    const expectedLength = parseInt(validationInput.getAttribute('data-length'));

    if (enteredValue.length === expectedLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  }
  validationInput.addEventListener('blur', checkInput);