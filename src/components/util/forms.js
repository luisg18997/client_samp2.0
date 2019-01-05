import React, {Fragment} from 'react';
import {MDBInput} from 'mdbreact';

export const LabelRequired = (labelName) => {
  return(
    <span>{labelName} <span style={{color:'red'}}>*</span></span>
  )
}

export const Label = (labelName,type, InputName, value, onChange, required) => {
  return(
    <Fragment>
      <MDBInput
      label={labelName}
      type={type}
      onChange={onChange}
      name={InputName}
      id={InputName}
      value={value}
      required={required}
      validate
      />
    </Fragment>
  )
}
