
  function InputForm(props) {
  const { label, name, value, onChange, error, type='text', onClick, required} = props;

  return (
    <div className="FormInput" >
      <label htmlFor ={name}>{label}</label><br></br>
      <input id={name} type={type} value={value} name={name} onChange={onChange} onClick={onClick} required/>
      {error && <div>{error}</div>}
    </div>
  );
}

export default InputForm;
