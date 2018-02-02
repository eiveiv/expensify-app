console.log('destructuring');

// const person = {
//     name: 'eivind',
//     age: 31,
//     location: {
//         city: 'Oslo',
//         temp: 44
//     }
// };

// const {
//     name: firstname = 'Anonymus',
//     age
// } = person;

// console.log(`${firstname} is ${age}`);

// const {
//     temp : temperature,
//     city
// } = person.location;

// if (temperature && city) {
//     console.log(`Its ${temperature} degrees in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:   'Pinguin'
//     }
// };

// const {
//     name: publisherName = 'selfpublish'
// } = book.publisher;

// console.log(publisherName); //Default selfpublush


// Array destructuring

const address = ['mogata 8a', '', , 1288];

const [gate, by, fylke = 'NYC', zip] = address;

console.log(`you are in ${gate}  ${fylke}`);


const item = ['tea', '$2', '$3', '$5'];

const [drikke,,mediumpris] = item;
console.log(`En medium ${drikke} koster ${mediumpris}`);