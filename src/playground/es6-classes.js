
class Person {
    
    constructor (name = 'Anonymos', age = 0 ) {
      console.log('test');
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      //return 'Hello mr ' + this.name;
      return `Hello I am ${this.name}`
    }
    getDescription() {
      return `${this.name} is ${this.age} ${this.age===1 ? 'year' : 'years'} old`;
    }
  
  };
  
  class Student extends Person{
    constructor(name, age, major){
      super(name, age)
      this.major = major;
    }
    hasMajor() {
      return !!this.major;
    }
    getDescription() {
      let description =  super.getDescription();
      if (this.hasMajor()) {
        description +=  ` majoring in ${this.major}`
      }
      return description;
    }
    
  }
  
  class Traveler extends Person {
    constructor(name, age, homeLocation) {
      super(name, age)
      this.homeLocation = homeLocation;
    }
  
    getGreeting() {
      let greeting = super.getGreeting();
      if (this.homeLocation) {
        greeting += ` I'm visiting from ${this.homeLocation}`
      }
      return greeting;
    }
    
  }
  
  const me = new Traveler('Eivind', 31, 'Oslo');
  const other = new Traveler(undefined,undefined, 'Radio nowhere');
  
  console.log(me.getGreeting());
  console.log(other.getGreeting());