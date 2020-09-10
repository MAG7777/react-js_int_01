import React from 'react';


export default class Name extends React.Component {
    render() {
        return (
            <h1>
                Name: {this.props.name}
            </h1>
        );
    }
}