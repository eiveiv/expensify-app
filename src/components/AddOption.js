import React from 'react';

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

export default AddOption;