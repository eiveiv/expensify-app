var nameVar = 'Eivind';
var nameVar = 'Other';
console.log('nameVar :' + nameVar);

let nameLet = 'Garben';
nameLet = 'Stian';
console.log('nameLet :' + nameLet);

const nameConst = 'Costanza';
console.log('nameconst :' + nameConst);

function getPetName() {
var petName = 'Hal';
return petName;
};
const petName = getPetName();
console.log(petName);


//Block scoping

var fullName = 'Garben Graastein';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}

