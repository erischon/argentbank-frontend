const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  required,
  autoComplete,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText || name}</label>
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
