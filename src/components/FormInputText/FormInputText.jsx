function FormTextInput({
  placeholder,
  legend,
  type = "text",
  onChange,
  value,
}) {
  return (
    <fieldset>
      <legend>
        <h5>{legend}</h5>
      </legend>
      <input
        className={"form-input input-m input-round-border"}
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </fieldset>
  );
}

export default FormTextInput;
