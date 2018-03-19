import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'



const date = new Date();
const now = moment();
console.log(now.format('MMMM DD YYYY'));

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:false,
            error: ''
        };
    }
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
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        this.setState(() => ({
            amount
        }));
        }
    }
    onDateChange = (createdAt) => {
        console.log('onDateChange');
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        }
    };
    onFocusedChange = ({focused}) => {
        console.log('onFocusedChange');
        this.setState(() => ({
            calendarFocused: focused
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            //Set error state equal to "Please provide description and amount"
            this.setState(() => ({error: 'Please provide description and amount'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                ExpenseForm
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
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