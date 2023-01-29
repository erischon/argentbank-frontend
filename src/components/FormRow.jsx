const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  required,
  autoComplete,
  label = true,
  className = "input-wrapper",
}) => {
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{labelText || name}</label>}

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default FormRow;
