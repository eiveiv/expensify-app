import React from 'react';
import ReactDOM from 'react-dom';

let showingDetails = false;

const changeButtonDoStuff = (e) => {
    showingDetails = !showingDetails;
    
    renderPage();
};



const renderPage = () => {
    const template = (
        <div>
        <h1>Button challenge greia </h1>
        <button onClick={changeButtonDoStuff}>{showingDetails ? 'Show details' : 'Hide stuff'}</button>
        <p>{showingDetails ? 'Here is stuff' : ''}</p>
        </div>
    );

    ReactDOM.render(template, document.getElementById('root'));

}

renderPage();


