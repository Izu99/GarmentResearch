import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import img1 from "../../images/clothingmanufacturer.png"

import '../../Styles/SignIn.css';

export default class SignIn extends Component {
  render() {
    return (
      <div className='signin'>
        <div className="image">
            <img src={img1} alt="" />
        </div>
        <form action="">
          <input type="text" className="name" placeholder='User Name'/>
          <input type="password" className="password" placeholder='Password'/>
          <button>
  <Link to={"/homepage"}>Sign In</Link>
</button>


          <h3><a href="">Forget Password?</a></h3>
          <h3><a href="">Don't Have an Account? <span>Sign Up</span></a></h3>
        </form>
       
      
      </div>
    );
  }
}