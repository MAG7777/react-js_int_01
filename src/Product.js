import React from 'react';
import Price from "./utils/Price";
import Name from "./utils/Name";
import Description from "./utils/Description";

export default class Product extends React.Component {

    render() {
        console.log("AAA===>>", this.props)
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