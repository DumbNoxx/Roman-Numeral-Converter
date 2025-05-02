const number = document.getElementById("number");
const errorNumber = document.getElementById("error-number");
const errorInput = document.getElementById("error-input");
const errorNumberMax = document.getElementById("number-max");
const buttonConvert = document.getElementById("convert-btn");
const divOutput = document.getElementById("output");

const romanSymbols = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

function toRoman(num) {
  let result = "";

  for (let i = 0; i < romanSymbols.length; i++) {
    const { value, symbol } = romanSymbols[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

const convert = () => {
  const num = parseInt(number.value);
  if (number.value === "") {
    errorInput.classList.remove("Hidden");
    setTimeout(() => {
      errorInput.classList.add("Hidden");
    }, 2000);
    return;
  }
  number.value = "";
  if (num > 3999) {
    errorNumberMax.classList.remove("Hidden");
    setTimeout(() => {
      errorNumberMax.classList.add("Hidden");
    }, 2000);
    return;
  }
  if (num < 0) {
    errorNumber.classList.remove("Hidden");
    setTimeout(() => {
      errorNumber.classList.add("Hidden");
    }, 2000);
    return;
  }

  divOutput.innerHTML = `
  <p class="converter">Converter</p>
  <p class="numbers">${toRoman(num)}</p>
  `;
  setTimeout(() => {
    divOutput.innerHTML = "";
  }, 5000);
};

buttonConvert.addEventListener("click", convert);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") convert();
});
