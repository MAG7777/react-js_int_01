import React from 'react';


export default function Person(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.surname}</h1>
        </div>
    );
}