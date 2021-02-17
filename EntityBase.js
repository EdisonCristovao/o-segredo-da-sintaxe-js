class EntityBase {
  #name;
  #age;
  #gender;

  constructor({ name, age, gender }) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  get name() {
    const preffix = this.#gender === "male" ? "Mr." : "Ms.";
    return `${preffix} ${this.#name}`;
  }

  get birthDay() {
    return this.#age;
  }

  set age(newValue) {
    this.#age = newValue;
  }
}

module.exports = EntityBase;
