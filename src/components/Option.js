import React from 'react';

const Option = (props) => (
        <div className="option">
            <p className="option__text">{props.number}.  {props.option}</p>
            <button className="button button--link"
            onClick={(e) => {
                console.log(props.option)
                props.handleDeleteOption(props.option);
            }}
            >remove</button>
        </div>
    );

export default Option;