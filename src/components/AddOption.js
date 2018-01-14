import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="optionInput" />
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;