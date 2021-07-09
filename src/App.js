import './App.css';
import Input from './Input'
import Button from './Button'
import Social from './social_media'
import facebook from './img/facebook.jpg'
import google from './img/google.jpg'

function App() {
  return (
    <div className = "main">
      <div className = "mother">
        <h2> Welcome <br></br> back! </h2>
        <Input label = "Email" placeholder = "Enter your email" />
        <Input label = "Password" placeholder = "Enter your password" />
        <a href = "#" >Forgot your password?</a>
        <Button class = 'login' text = "LOGIN"/>
        <p className = "or">or</p>
        <Social text = "Facebook" src = {facebook} class = "facebook" />
        <Social text = "Google" src =  {google} class = "google"/>
      <p className = "check">Don't have an account?</p>  
      <Button class = "create" text = "Create account"/>
      </div> 
    </div>
  );
}

export default App;
