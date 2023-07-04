document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('transportForm');
  const cancelButton = document.getElementById('cancelButton');
  cancelButton.addEventListener('click', function () {
    form.reset();
    window.sessionStorage.clear();
  });
});
