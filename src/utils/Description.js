import React from 'react';


export default class Description extends React.Component {
    render() {
        return (
            <h1>
                Description: {this.props.description}
            </h1>
        );
    }
}