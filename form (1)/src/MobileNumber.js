function MobileNumber(props) {
  const { label, name, value, onChange, error, type = "text", onClick} = props;
  const countryCodes = [
    {
      code: "AM",
      label: "+374",
    },

    {
      code: "RU",
      label: "+7",
    },

    {
      code: "US",
      label: "+1",
    },
  ];

  return (
    <div className="FormInput">
      <label htmlFor={name}>{label}</label>
      <br></br>
      <select name="countryCode">
        {countryCodes.map((item) =>  <option key={item.code} value={item.label}>{item.label}</option>)}
      </select>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onClick={onClick}
      />
      {error && <div>{error}</div>}
    </div>
  );
}

export default MobileNumber;
