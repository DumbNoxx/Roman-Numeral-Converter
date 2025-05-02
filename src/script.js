// Get references to DOM elements for user input, error messages, and output display
const number = document.getElementById("number"); // Input field for entering the number to convert
const errorNumber = document.getElementById("error-number"); // Error message for negative numbers
const errorInput = document.getElementById("error-input"); // Error message for empty input
const errorNumberMax = document.getElementById("number-max"); // Error message for numbers exceeding the maximum limit
const buttonConvert = document.getElementById("convert-btn"); // Button to trigger the conversion
const divOutput = document.getElementById("output"); // Div to display the conversion result

// Array of Roman numeral symbols and their corresponding values
const romanSymbols = [
  { value: 1000, symbol: "M" }, // Represents 1000 in Roman numerals
  { value: 900, symbol: "CM" }, // Represents 900 in Roman numerals
  { value: 500, symbol: "D" }, // Represents 500 in Roman numerals
  { value: 400, symbol: "CD" }, // Represents 400 in Roman numerals
  { value: 100, symbol: "C" }, // Represents 100 in Roman numerals
  { value: 90, symbol: "XC" }, // Represents 90 in Roman numerals
  { value: 50, symbol: "L" }, // Represents 50 in Roman numerals
  { value: 40, symbol: "XL" }, // Represents 40 in Roman numerals
  { value: 10, symbol: "X" }, // Represents 10 in Roman numerals
  { value: 9, symbol: "IX" }, // Represents 9 in Roman numerals
  { value: 5, symbol: "V" }, // Represents 5 in Roman numerals
  { value: 4, symbol: "IV" }, // Represents 4 in Roman numerals
  { value: 1, symbol: "I" }, // Represents 1 in Roman numerals
];

// Function to convert a number to its Roman numeral representation
function toRoman(num) {
  let result = ""; // Initialize an empty string to build the Roman numeral

  // Iterate through the Roman symbols array
  for (let i = 0; i < romanSymbols.length; i++) {
    const { value, symbol } = romanSymbols[i]; // Destructure value and symbol from the current object
    // While the number is greater than or equal to the current Roman value
    while (num >= value) {
      result += symbol; // Append the Roman symbol to the result
      num -= value; // Subtract the value from the number
    }
  }

  return result; // Return the final Roman numeral string
}

// Function to handle the conversion process when the user clicks the button or presses Enter
const convert = () => {
  const num = parseInt(number.value); // Parse the input value as an integer

  // Check if the input field is empty
  if (number.value === "") {
    errorInput.classList.remove("Hidden"); // Show the error message for empty input
    setTimeout(() => {
      errorInput.classList.add("Hidden"); // Hide the error message after 2 seconds
    }, 2000);
    return; // Exit the function
  }

  number.value = ""; // Clear the input field

  // Check if the number exceeds the maximum limit of 3999
  if (num > 3999) {
    errorNumberMax.classList.remove("Hidden"); // Show the error message for exceeding the limit
    setTimeout(() => {
      errorNumberMax.classList.add("Hidden"); // Hide the error message after 2 seconds
    }, 2000);
    return; // Exit the function
  }

  // Check if the number is negative
  if (num < 0) {
    errorNumber.classList.remove("Hidden"); // Show the error message for negative numbers
    setTimeout(() => {
      errorNumber.classList.add("Hidden"); // Hide the error message after 2 seconds
    }, 2000);
    return; // Exit the function
  }

  // Display the conversion result in the output div
  divOutput.innerHTML = `
  <p class="converter">Converter</p> <!-- Label for the conversion result -->
  <p class="numbers">${toRoman(num)}</p> <!-- Display the Roman numeral -->
  `;

  // Clear the output after 5 seconds
  setTimeout(() => {
    divOutput.innerHTML = ""; // Reset the output div content
  }, 5000);
};

// Add an event listener to the convert button to trigger the conversion
buttonConvert.addEventListener("click", convert);

// Add an event listener to the input field to trigger the conversion on pressing Enter
number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") convert(); // Call the convert function if the Enter key is pressed
});
