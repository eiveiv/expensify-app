import React from 'react';

const Portfolio = (props) => (
    <div>
        Portfolio {props.match.params.id}
    </div>
);

export default Portfolio;