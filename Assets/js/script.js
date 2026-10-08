
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultInput = document.getElementById('result');

const btnAdd = document.getElementById('btn-add');
const btnSub = document.getElementById('btn-sub');
const btnMul = document.getElementById('btn-mul');
const btnDiv = document.getElementById('btn-div');


function getInputs() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultInput.value = "Lütfen her iki sayı alanını doldurun!";
    return null;
  }
  return { num1, num2 };
}


btnAdd.addEventListener('click', () => {
  const values = getInputs();
  if (values) {
    resultInput.value = values.num1 + values.num2;
  }
});

btnSub.addEventListener('click', () => {
  const values = getInputs();
  if (values) {
    resultInput.value = values.num1 - values.num2;
  }
});

btnMul.addEventListener('click', () => {
  const values = getInputs();
  if (values) {
    resultInput.value = values.num1 * values.num2;
  }
});

btnDiv.addEventListener('click', () => {
  const values = getInputs();
  if (values) {
    if (values.num2 === 0) {
      resultInput.value = "Sıfıra bölme işlemi yapılamaz!";
    } else {
      resultInput.value = values.num1 / values.num2;
    }
  }
});