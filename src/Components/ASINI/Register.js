import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/CandidateRegister.css";

export default function Register() {
  let navigate = useNavigate();


  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

const handleSubmit = (event) => {
  event.preventDefault();

  axios.post('https://garmnetresearch.onrender.com/notes', inputs).then(function(response){
      console.log(response.data);
      navigate('/');
  });
    
}
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="candidate"
          placeholder="Candidate"
          name="candidate"
          onChange={handleChange}
        />

        <br />
        <input
          type="text"
          className="name"
          placeholder="User Name"
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          className="age"
          placeholder="Age"
          name="age"
          onChange={handleChange}
        />
        <br />
        <input
          type="date"
          className="joinDate"
          placeholder="Join Date"
          name="joinDate"
          onChange={handleChange}
        />
        <br />
        {/* <input
          type="text"
          className="rate"
          placeholder="Rate"
          readOnly
          value={0}
          name="rate"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="rate"
          placeholder="Rate"
          readOnly
          value={0}
          name="rate"
          onChange={handleChange}
        /> */}
     
        <br />
        <div className="button">
          <button type="submit">Sign Up</button>
        </div>
        <p className="to-signin">Already Have an Account? <a href="/signin">LogIn</a></p>
      </form>
    </div>
  );
}