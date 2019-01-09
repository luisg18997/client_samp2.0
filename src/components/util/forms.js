import React, {Fragment} from 'react';
import {MDBInput, MDBDataTable} from 'mdbreact';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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

export const table = (data) => {
  return(
    <MDBDataTable
    entriesLabel="Mostrar paginas"
    searchLabel="Buscar"
    infoLabel={["Mostrando", "de", "de", "entradas"]}
    paginationLabel={["Anterior", "Siguiente"]}
      striped
      small
      data={data}
    />
  )
}

export const selectForm = (InputName,value,onChange,options) => {
  return(
    <Fragment>
        <InputLabel htmlFor={InputName}>{InputName}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
            name= {InputName}
            id= {InputName}
        >
          <MenuItem value=""></MenuItem>
          {options.map((opt) => <MenuItem key={opt.ID} value={opt.ID}>{opt.label}</MenuItem>)}
        </Select>
        </Fragment>
  )
}
