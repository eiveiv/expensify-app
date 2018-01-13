import React from 'react';

import Options from './Options';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>
                optionToRemove !== option
            )
        }));
        console.log('Deleting option' + optionToRemove);
    }

    handleClosePopup = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handlePickOption = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
        console.log(this.state.selectedOption);
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value pl0xz';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    }

    componentDidMount() {
        console.log(__dirname);
        try {
            const json = localStorage.getItem('options');
            const optionsArray = JSON.parse(json);
            if (optionsArray) {
                this.setState(() => ({
                    options: optionsArray
                }));
            }
        } catch (e) {
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

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container" color="containerBodyColor">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePickOption={this.handlePickOption}
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOption={this.handleDeleteOption}
                            handleDeleteOptions={this.handleDeleteOptions}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption}
                    handleClosePopup={this.handleClosePopup}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;