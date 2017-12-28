import React from 'react';
import ReactDOM from 'react-dom';



class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingDetails : true
    }
    this.changeButtonDoStuff = this.changeButtonDoStuff.bind(this);
    
  }
  changeButtonDoStuff() {
    this.setState((prevState) => {
      return {
        showingDetails: !prevState.showingDetails
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Button challenge greia </h1>
        <button onClick={this.changeButtonDoStuff}>{this.state.showingDetails ? 'Hide stuff' : 'Show stuff'}</button>
        <p>{this.state.showingDetails ? 'Here is stuff' : ''}</p>
      </div>
    );
  }
}



ReactDOM.render(<ToggleButton />, document.getElementById('root'));





