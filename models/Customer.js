import Person from "./Person.js";

export default class Customer extends Person {
  // * attributes
  constructor(id, name, address, email, companyName, billValue, rating) {
    super(id, name, address, email);
    this.companyName = companyName;
    this.billValue = billValue;
    this.rating = rating;
  }

  // * methods
}