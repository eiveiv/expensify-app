import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options : props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

    }

    componentDidMount() {
        console.log(__dirname);
        try {
            const json = localStorage.getItem('options');
            const optionsArray = JSON.parse(json);
            if (optionsArray) {
                this.setState(() => ({
                    options : optionsArray
                }));
            }
        } catch(e) {
            console.log('ERROR');
        }
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('unmounting');
    }

    handleDeleteOptions() {
        this.setState(() => ({
            options : []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => 
               optionToRemove !== option
            )
        }));
        console.log('Deleting option' + optionToRemove);
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

        this.setState((prevState) => ({
                options: prevState.options.concat(option)
            }));

    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header  subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options options = {this.state.options} 
                    handleDeleteOption = {this.handleDeleteOption}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do</button>
        </div>
    );

};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p> Please add an option</p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    option={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
                
            )}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                console.log(props.option)
                props.handleDeleteOption(props.option);
            }}
            >remove</button>
        </div>
    );
};

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
        this.setState(() => ({error: error}));

        if (!error) {
            e.target.elements.optionInput.value = '';
        }
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







