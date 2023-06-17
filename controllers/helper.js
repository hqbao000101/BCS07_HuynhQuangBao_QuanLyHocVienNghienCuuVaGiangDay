// todo: format salary
function formatSalary(salary) {
  let number = salary.toString().split("");
  let numberIndex = 1;
  for (let i = number.length - 1; i >= 0; i--) {
    if (numberIndex != number.length && numberIndex % 3 == 0) {
      number[i] = `.${number[i]}`;
    }
    numberIndex++;
  }
  return `${number.join("")} đ`;
}

export { formatSalary };
