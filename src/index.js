import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : ['Fishing', 'Working', 'Drinking']
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options : []
            };
        });
    }
    handlePickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value pl0xz';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option exists';
        } 

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
       
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title = {title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options options = {this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    
    render() {
        return (
            <div>
                <button disabled = {!this.props.hasOptions} onClick={this.props.handlePickOption}>What should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {this.props.options.map((option) => 
                    <Option key ={option} option = {option} />
                )}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.option}</p>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.optionInput.value.trim();
        const error = this.props.handleAddOption(option);
        // e.target.elements.optionInput.value = '';
        this.setState(() => {
            return {
                error: error
            }
        });

        
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="optionInput" />
                <br/>
                <button>Add option</button>
                </form>
            </div>
        );
    }
}

//Er raskere enn class based components
// const User = (props) => {
//     return (
//     <div>
//         <p>Name : {props.name} </p>
//         <p>Age : {props.age}</p>
//     </div>
//     )};

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));







