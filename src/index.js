import React from 'react';
import ReactDOM from 'react-dom';

console.log('Running app');

const appObjekt = {
    title: 'Indecision App',
    subtitle: 'App for de som ikke klarer velge',
    options: []
};

//Vil bare gi en referanse til onFormSubmit, ikke kalle metode med (), da vil undefined bli returnert
const onFormSubmit = (e) => {
    e.preventDefault(); //Stopper full page refresh
    const option = e.target.elements.option.value;
    if (option) {
        appObjekt.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
    
};

const onRemoveOptions = () => {
    appObjekt.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObjekt.options.length);
    const option = appObjekt.options[randomNum];
    alert(option);
};

// const showOptionsButtons = () => {
//     if (appObjekt.options.length > 0) {
//         return <div>
//             <button onClick={onRemoveOptions}>Remove</button>
//             <button onClick={onMakeDecision}>What should I do</button>
//         </div>
//     }
// }

const renderApp = () => {
    const template = (
        <div>
            <h1>{appObjekt.title}</h1>
            {appObjekt.subtitle && <p>{appObjekt.subtitle}</p>}
            <p>{(appObjekt.options && appObjekt.options.length > 0) ? "Here are your options" : "No options for you !"}</p>
            <button disabled={appObjekt.options.length === 0} onClick={onRemoveOptions}>Remove</button>
            <button disabled={appObjekt.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <ol>
                {
                    appObjekt.options.map((option) => {
                        return <li key={option}>Option : {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, document.getElementById('root'));
};

renderApp();







