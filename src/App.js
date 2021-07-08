import './App.css';
import Input from './Input'
import Button from './Button'
import Social from './social_media'

function App() {
  return (
    <div className = "mother">
       <h2> Welcome <br></br> back! </h2>
      <Input label = "Email" placeholder = "Enter your email" />
      <Input label = "Password" placeholder = "Enter your password" />
      <a href = "#" >Forgot your password?</a>
      <Button class = 'login' text = "LOGIN"/>
      <p className = "or">or</p>
      <Social text = "Facebook" src =  "/img/facebook.jpg" class = "facebook" />
      <Social text = "Google" src =  "/img/google.jpg" class = "google"/>
     <p className = "check">Don't have an account?</p>  
     <Button class = "create" text = "Create account"/>
    </div> 
  );
}

export default App;
