import React from 'react';

function Input(props) {
  const {myAge ,onageChange}=props
  return (
    <div>
      <input type="text"  value={myAge} onChange={onageChange}></input>


    </div>
  )
}

export default Input;