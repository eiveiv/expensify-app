import React from 'react';
import ReactDOM from 'react-dom';

console.log('Running app');

const appObjekt = {
    title: 'Indecision App',
    subtitle: 'App for de som ikke klarer velge'
};

const template = (
    <div>
        <h1>{appObjekt.title}</h1>
        {appObjekt.subtitle && <p>{appObjekt.subtitle}</p>}
        <p>{(appObjekt.options && appObjekt.options.length > 0) ? "Here are your options" : "No options for you !"}</p>
        <ol>
            <li>first tiem</li>
            <li>second item</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};





const renderCounterApp = () => {
    const templateTwo = (
        <div> 
            <h1>Count : {count} </h1>
            <button onClick={addOne}>+1 </button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

ReactDOM.render(templateTwo,document.getElementById('root'));
};

renderCounterApp();
// const user = {
//     name:'Eivind',
//     location: 'Sagene',
//     age: 19
// };

// //Returnerer undefined default
// function getLocation(location) {
//     if (location) {
//         return  <p>Sted : {location}</p>;
//     }
// };

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Uknown'}</h1>
//         {(user.age && user.age >= 18) && <p>Alder : {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

