// tagged template literals
const meal = 'dinner';
const taste = 'good';
function getSnackTaste(string, ...values) {
  console.log(string);
  console.log(values);
  console.log(values[0]);
}
getSnackTaste`Today, ${meal} is ${taste}`;
