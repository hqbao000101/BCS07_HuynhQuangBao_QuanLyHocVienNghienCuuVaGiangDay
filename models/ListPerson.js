export default class ListPerson {
  // * attributes
  constructor() {
    this.personArr = [];
  }

  // * methods
  // * CRUD
  addPerson(person) {
    this.personArr.push(person);
  }
  updatePerson(person) {
    for (let item of this.personArr) {
      if (item.id == person.id) {
        item = person;
      }
    }
  }
  deletePerson(id) {
    for (let [item,index] of this.personArr.entries()) {
      if (item.id == id) {
        this.personArr.splice(index, 1);
      }
    }
  }
}