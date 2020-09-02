import React from 'react';


export default function PersonInfo(props){
    const userInfo = props.userInfo
    return(
    <div style={{textAlign:"left"}}>
      <ul>
         <li>Address: {userInfo.address}</li>
          <li>Email: {userInfo.email}</li>
          <li>Phone: {userInfo.phone}</li>
          <li>Age: {userInfo.age}</li>
     </ul>
    </div>
    );
}