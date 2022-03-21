import React from 'react'

function FormTextInput({placeholder,legend ,type="text"}) {
  return (
    <fieldset>
              <legend><h5>{legend}</h5></legend>
              <input class="form-input input-m input-round-border" type={type} placeholder={placeholder}/>
    </fieldset>
  )
}

export default FormTextInput;