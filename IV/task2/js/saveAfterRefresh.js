document.addEventListener('DOMContentLoaded', function () {
  const carNumberInput = document.getElementById('carNumber');
  const passSeriesInput = document.getElementById('passSeries');
  const passNumberInput = document.getElementById('passNumber');

  if (carNumberInput) {
    const carNumberValue = window.sessionStorage.getItem(carNumberInput.name);
    if (carNumberValue) {
      carNumberInput.value = carNumberValue;
    }
    carNumberInput.addEventListener('input', function () {
      window.sessionStorage.setItem(carNumberInput.name, carNumberInput.value);
    });
  }

  if (passSeriesInput) {
    const passSeriesValue = window.sessionStorage.getItem(passSeriesInput.name);
    if (passSeriesValue) {
      passSeriesInput.value = passSeriesValue;
    }
    passSeriesInput.addEventListener('input', function () {
      window.sessionStorage.setItem(passSeriesInput.name, passSeriesInput.value);
    });
  }

  if (passNumberInput) {
    const passNumberValue = window.sessionStorage.getItem(passNumberInput.name);
    if (passNumberValue) {
      passNumberInput.value = passNumberValue;
    }
    passNumberInput.addEventListener('input', function () {
      window.sessionStorage.setItem(passNumberInput.name, passNumberInput.value);
    });
  }

  const otherInputs = document.querySelectorAll(
    'input:not(#carNumber):not(#passSeries):not(#passNumber)'
  );
  otherInputs.forEach(function (input) {
    const value = window.sessionStorage.getItem(input.name);
    if (value) {
      input.value = value;
    }
    input.addEventListener('input', function () {
      window.sessionStorage.setItem(input.name, input.value);
    });
  });

  if (carNumberInput) {
    $('#carNumber').mask('z000zz00y', {
      translation: {
        z: {
          pattern: /[а-яА-Я]/,
        },
        y: {
          pattern: /[0-9]/,
          optional: true,
        },
      },
    });
  }
  if (passSeriesInput) {
    $('#passSeries').mask('9999');
  }
  if (passNumberInput) {
    $('#passNumber').mask('999999');
  }
});
