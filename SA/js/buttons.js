document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.getElementById('saveButton');

  const inputs = document.querySelectorAll('input');
  const selects = document.querySelectorAll('select');
  const textareas = document.querySelectorAll('textarea');
  const data = [...inputs, ...selects, ...textareas];

  data.forEach(function (input) {
    const value = window.sessionStorage.getItem(input.name);
    if (value) {
      input.value = value;
    }
    saveButton.addEventListener('click', function () {
      window.sessionStorage.setItem(input.name, input.value);
    });
  });

  const sendButton = document.getElementById('sendButton');
  const form = document.getElementById('transportForm');
  sendButton.addEventListener('click', function () {
    sendButton.textContent = 'Request is sent';
    this.classList.add('btn__active');
    form.reset();
    window.sessionStorage.clear();
  });
});
