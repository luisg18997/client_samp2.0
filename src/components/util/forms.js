import React, {Fragment} from 'react';
import {MDBInput, MDBDataTable} from 'mdbreact';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import 'muicss/dist/css/mui.min.css'

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

export const select = (labelName,InputName,value,onChange,options,required) => {
  return(
    <Select
    label={labelName}
    id={InputName}
    useDefault={true}
    name={InputName}
    value={value}
    onChange={onChange}
    required={required}
    >
    <Option value=""/>
    {options.map((opt) => <Option key={opt.ID} value={opt.ID} label={opt.label}/>)}
    </Select>
  );
}
