
  const valueSpan = document.getElementById('value');
  const decrementButton = counter.querySelector('[data-action="decrement"]');
  const incrementButton = counter.querySelector('[data-action="increment"]');

let counterValue = 0;
  function updateCounterValue() {
    valueSpan.textContent = counterValue;
  }
  incrementButton.addEventListener('click', function() {
    counterValue++;
    updateCounterValue();
  });
  decrementButton.addEventListener('click', function() {
    counterValue--;
    updateCounterValue();
  });
  updateCounterValue();