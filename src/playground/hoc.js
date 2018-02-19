import React from 'react';
import ReactDOM from 'react-dom';

console.log('HOC.JS')

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info </p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Du må logge inn </p>}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="detaljer" />, document.getElementById('app'));