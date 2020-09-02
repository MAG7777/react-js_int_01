import React from 'react';


export default class Price extends React.Component {
    render() {
        return (
            <h1 >
                Price: {this.props.price}
            </h1>
        );
    }
}