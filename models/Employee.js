import Person from "./Person.js";

export default class Employee extends Person {
  // * attributes
  constructor(id, name, address, email, workDay, salaryByDay) {
    super(id, name, address, email);
    this.workDay = workDay;
    this.salaryByDay = salaryByDay;
  }

  // * methods
  calSalary() {
    return (this.salaryByDay * this.workDay); 
  }
}