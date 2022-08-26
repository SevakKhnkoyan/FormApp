import React from "react";
import { useState } from 'react';

function Name({onChange}) {
  const[name, setName] = useState('')
  const handleChange = ({target:{value}}) => {
      setName(value);    
  };
  return(
  <div className='name' onBlur={onChange(name)}>
      <label htmlFor='Name'>Name*</label>
      <input type='text' id='Name' onChange={handleChange} value={name} required maxLength={15}/>
  </div>
  )
}

function Surname({onChange}) {
  const[surname, setSurname] = useState('')
  const handleChange = ({target:{value}}) => {
      setSurname(value);
  };
  return(
  <div className='surname' onBlur={onChange(surname)}>
      <label htmlFor='Surname'>Surname*</label>
      <input type='text' id='Surname' onChange={handleChange} value={surname} required maxLength={15}/>
  </div>
  )
}

function Gender({onChange}) {
  const[gender, setGender] = useState("")

  const handleClick = ({target:{id}}) =>{
      setGender(id);
  }

  const genders = ['male', 'female'];

  return(
      <div className='gender'  onBlur={onChange(gender)}>
          <label>Gender</label>
          <>
              {genders.map((item, index) =>
              <span key={index}>
                  <input type='radio' name='geder' id={item} onClick={handleClick}/>
                  <label htmlFor={item}>{item}</label>
              </span>
              )}
          </>       
      </div>
  )
}

function Phone({onChange}) {
  const countryCodes = [
      {code: '+374', title: 'AM'},
      {code: '+7', title: 'RU'},
      {code: '+1', title: 'US'},
      {code: '+995', title: 'GE'},
  ]
  const[phone, setPhone] = useState('');
  const[selected, setSelected] = useState(countryCodes[0].code);
  const handleChange = ({target:{value}}) => {
      setPhone(value);
  };
  const selectCountry = ({target:{value}}) => {
      setSelected(value)
  }


  const returnPhone = () =>{
      onChange(selected, phone);
  }

  return(
      <div className='phone' onBlur={returnPhone}>
          <label htmlFor="country">Phone</label>
          <select name="country" id="country" form="form" onChange={selectCountry}>
          {countryCodes.map(( {code, title}) =>
              <option key={title} value={code}>{title}</option>
          )};
          </select>
          <input type='tel' id='phone' onChange={handleChange} pattern='[0-9]{11}' placeholder='+37499-999-999'/>
      </div>
  )
}

function Email({onChange}) {
  const [email, setEmail] = useState('');
  const handleChange = ({target:{value}}) => {
      setEmail(value) 
      
  };

  const validateEmail = (email) => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test((email).val())) { return true } else { return false };
  };

  return(
      <div className='uEmail' onBlur={onChange(email)}>
          <label htmlFor='Email'>Email*</label>
          <input type='email' id='Email' onChange={handleChange} value={email} required />
          {validateEmail && <span>Invalide email</span>}
      </div>
  )
}

function SendButton({user}) {

  const handleClick = (e) =>{
      console.log(user);
      e.preventDefault();
  }

  return(
      <button onClick={handleClick}>Send</button>

  )
}

function Form() {
  const user = {
      name: "",
      surname: "",
      gender: "",
      phone: "",
      email: "",
  }

  const handleNameChange = (item) =>{
      user.name = item;
  }

  const handleSurnameChange = (item) =>{
      user.surname = item;
  }

  const handleGenderChange = (item) =>{
      user.gender = item;
  }

  const handlePhoneChange = (title, code) =>{
      user.phone = `${title} ${code}`;
  }
  
  const handleEmailChange = (item) =>{
      user.email = item;
  }

  return(
      <form className='form'>
          <Name onChange={handleNameChange}/>
          <Surname onChange={handleSurnameChange}/>
          <Gender onChange={handleGenderChange}/>
          <Phone onChange={handlePhoneChange}/>
          <Email onChange={handleEmailChange}/>
          <SendButton user={user} />
      </form>
  )  
}

const App = () => {
  return (
  <div className="App">
    <Form />
  </div>
  );
};

export default App;
