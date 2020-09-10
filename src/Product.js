import React from 'react';
import Price from "./components/Price";
import Name from "./components/Name";
import Description from "./components/Description";

export default class Product extends React.Component {

    render() {
        const info = this.props.info;
        return (
            <div style={{textAlign:"left"}}>
                <Name name={info.name}/>
                <Price price={info.price}/>
                <Description description={info.description}/>
            </div>
        );
    }
}