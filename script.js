document.addEventListener('DOMContentLoaded', (event) => {
  let count = 0;

  const counterBox = document.getElementById('counterBox');

  const incrementButton = document.createElement('button');
  incrementButton.id = 'incrementButton';
  incrementButton.innerText = '+';
  counterBox.appendChild(incrementButton);

  const decrementButton = document.createElement('button');
  decrementButton.id = 'decrementButton';
  decrementButton.innerText = '-';
  counterBox.appendChild(decrementButton);

  const counterTotal = document.createElement('span');
  counterTotal.id = 'counterValue';
  counterTotal.innerText = count;
  counterBox.appendChild(counterTotal);

  incrementButton.addEventListener('click', () => {
    count++; counterTotal.innerText = count;
  });
  decrementButton.addEventListener('click', () => {
    count--; counterTotal.innerText = count;
  });



  buttonReset.addEventListener('click', () => {
    count = 0; counterTotal.innerText = 0;
  })


})

