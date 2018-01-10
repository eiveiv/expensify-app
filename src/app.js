import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

//stateless functional component

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSynstax {
    constructor() {
        this.name = 'Eiveiv'
    }

    getGreeting() {
        return `Hello mr ${this.name}`;
    }
}

const oldSynstax = new OldSynstax();
console.log(oldSynstax.getGreeting());

//-----

class NewSyntax {
    name = 'Påsan'

    getGreeting = () => {
        return `Hei på deg ${this.name}`;
    }
}

const newSyntax = new NewSyntax();

console.log(newSyntax.getGreeting());






