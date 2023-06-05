const myName = 'Marcos';
const myAge = 28;
const sum = (a: number, b: number) => {
  return a + b;
};
sum(12, 13);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const marcos = new Person(myAge, myName);
marcos.getSummary();
