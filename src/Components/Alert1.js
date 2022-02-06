import React from 'react';
const capitalised =(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }
function Alert1(props) {
  return (
        props.alert1 && <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalised(props.alert1.type)} </strong>: {props.alert1.msg}
         </div>
  
  );
}

export default Alert1;
