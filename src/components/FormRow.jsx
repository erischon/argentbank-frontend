const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelText || name}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default FormRow;
