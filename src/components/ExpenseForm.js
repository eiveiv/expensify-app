import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'



const date = new Date();
const now = moment();
console.log(now.format('MMMM DD YYYY'));

class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused:false
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
    onDateChange = (createdAt) => {
        console.log('onDateChange');
        this.setState(() => ({
            createdAt
        }));
    };
    onFocusedChange = ({focused}) => {
        console.log('onFocusedChange');
        this.setState(() => ({
            calendarFocused: focused
        }));
    };
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
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusedChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
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