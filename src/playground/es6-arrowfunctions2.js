//arguments object - no longer bound by arrow functions

const add = function (a, b) {
  console.log(arguments); //ikke tilgang til denne i arrow functions
  return a + b;
};

console.log(add(1, 5));

const addv2 = (a, b) => {
  return a + b;
}

console.log(addv2(5, 3));


//this keyword - no longer bound 

const user = {
  name: 'Eivind',
  citys: ['Oslo', 'Bardufoss', 'Bergen'],
  printPlacesLived() {
    //console.log(this.name);
    //console.log(this.citys);
    // Vanlig functions har ikke tilgang til this keyword, arrow arver fra parrent
    return this.citys.map((city) => this.name + ' has lived in ' + city);
    //this.citys.forEach((city) => {
    //  console.log(this.name + ' har bodd i ' + city);
    //});
  }
};

console.log(user.printPlacesLived());


//Challenge

const multiplier = {
  //Array of numbers
  numbers: [2,4,8,16],
  //MultipleBy Single number
  multiplyBy: 4,
  //Multiply, metode som ganger array  
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());