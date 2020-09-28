import React,{useState} from 'react';
import '../App.css';
import { Input, Button, Form, Container,Dimmer,Loader } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState(false)

  const login = () => {

    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json-patch+json");
    setLoading(true)

    const body = {
      "name": " ",
      "surname": "",
      "email": username,
      "password": password,
      "number": "",
      "type": ""
    }
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: 'follow'
    };

    fetch("https://saosa.herokuapp.com/api/Bizmod/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('user', JSON.stringify(result))
        setTimeout(() => {
          setLoading(false)
          if(result.type === "candidate"){
            window.location = '/Nav/user'
          }
          else if(result.type === "recruiter"){
            window.location = '/Nav/recruiter'

          }else if(result.type === "admin"){
            window.location = '/Nav/admin'
          }
          
        }, 5000);
        
      })
      .catch(error => setLoading(false));

  }

  const reclogin = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"password":password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://gentle-savannah-90866.herokuapp.com/user/recruiter", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then( result => {
        result[0].name && (window.location = '/Nav/recruiter')})
      .catch(error => console.log('error', error));

  }

  const admin = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"password":password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://gentle-savannah-90866.herokuapp.com/user/admin", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then( result => {
        result.admin && (window.location = '/Nav/admin')})
      .catch(error => console.log('error', error));

  }

  return (
    <Container as='fieldset' className='loginContainer'>
    <legend><h1 style={{color:'#2185d0'}}>Login</h1></legend>
   <Form>
     <Form.Field required >
       <label>Email</label>
       <Input placeholder='Email'
         icon='user' iconPosition='left'
         onChange={ val => setUsername(val.target.value)} />
     </Form.Field>
     
     <Form.Field required>
       <label>Password</label>
       <Input 
         icon='lock' 
         iconPosition='left' 
         placeholder=' password'
         type='password'
         onChange={ val => setPassword(val.target.value)} 
       />
     </Form.Field>
     {
       loading ?  <Dimmer active>
       <Loader />
     </Dimmer> :
       <Button className='loginBtn' primary fluid type='submit' onClick={login}>Login</Button>
     }
     
      <div>
      Don't have an account? <Link to='/signup'>Register</Link>
      </div>
      <div>
      Forgot Password? <Link to='/reset'>Reset</Link>
      </div>
   </Form>
 </Container>
  );
}

export default App;
