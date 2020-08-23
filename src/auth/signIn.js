import React,{useState} from 'react';
import '../App.css';
import { Input, Button, Form, Container } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  const login = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"password":password});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://gentle-savannah-90866.herokuapp.com/user/users", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then( result => {
        result[0].name && (window.location = '/Nav/user')})
      .catch(error => console.log('error', error));

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
       <label>Username</label>
       <Input placeholder='username'
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
     <Button className='loginBtn' primary fluid type='submit' onClick={login}>
     
      Candidate Login</Button>
      <Button className='loginBtn' primary fluid type='submit' onClick={reclogin}>
     
      Recruiter Login</Button>
      <Button className='loginBtn' primary fluid type='submit' onClick={admin}>
     
      Admin Login</Button>
       Don't have an account? <Link to='/signup'>Register</Link>
   </Form>
 </Container>
  );
}

export default App;
