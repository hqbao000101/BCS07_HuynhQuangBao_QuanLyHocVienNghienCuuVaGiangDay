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

// todo: local storage
function saveLocal(person) {
  localStorage.setItem("Person", JSON.stringify(person));
}

function getLocal() {
  let localPerson = JSON.parse(localStorage.getItem("Person"));
  if (localPerson != null) {
    person = localPerson;
  }
}

function clearLocal() {
  localStorage.removeItem("Person");
}

// todo: export all
export { formatSalary, saveLocal, getLocal, clearLocal };
