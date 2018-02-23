import React from 'react';

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
        this.setState(() => ({
            amount
        }));
        }
    }
    render() {
        return (
            <div>
                ExpenseForm
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        onChange={this.onDescriptionChange}
                        value={this.state.description}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note about stuff n stuff"
                        onChange={this.onNoteChange}
                        value={this.state.note}>
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;