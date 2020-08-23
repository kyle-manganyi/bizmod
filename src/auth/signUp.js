import React,{useState} from 'react';
import './auth.css';
import { Link } from 'react-router-dom'
import { Input, Button, Form, Container } from 'semantic-ui-react'

function App() {

  const [ name,setName] = useState('')
  const [ surname,setSurname] = useState('')
  const [ numbers,setNumbers] = useState()
  const [ username,setUsername] = useState('')
  const [ password,setPassword] = useState('')


const userRegister = (e) => {
  console.log(name,surname,numbers)
  e.preventDefault()
  const body = {
    "name": name,
    "surname": surname,
    "username": username,
    "password": password,
    "numbers": numbers

  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(body);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://gentle-savannah-90866.herokuapp.com/user/registerall", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const recRegister = (e) => {
  console.log(name,surname,numbers)
  e.preventDefault()
  const body = {
    "name": name,
    "surname": surname,
    "username": username,
    "password": password,
    "numbers": numbers,
    "isadmin": true

  }
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify(body);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://gentle-savannah-90866.herokuapp.com/user/registerall", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

  return (
    <Container as='fieldset' className='loginContainer'>
    <legend><h1 style={{color:'#2185d0'}}>Register</h1></legend>
   <Form >

   <Form.Field required >
       <label>Name</label>
       <Input placeholder='fullname'
         icon='user' 
         iconPosition='left' 
         
         onChange={ val => setName(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Surname</label>
       <Input placeholder='surname'
         icon='user' 
         iconPosition='left' 
         
         onChange={ val => setSurname(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Phone Number</label>
       <Input placeholder='phone number'
         icon='phone' iconPosition='left' 
         onChange={ val => setNumbers(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Username</label>
       <Input placeholder='username'
         icon='user' iconPosition='left'
         onChange={ val => setUsername(val.target.value)}
       />
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

     <Form.Field required>
       <label>Confirm Password</label>
       <Input 
         icon='lock' 
         iconPosition='left' 
         placeholder='Confirm Password'
         type='password'
       />
     </Form.Field>

     <Button 
       className='loginBtn' 
       primary 
       fluid 
       type='submit'
       onClick={userRegister}
       >
      Candidate Register</Button>

      <Button 
          className='loginBtn' 
          primary 
          fluid 
          type='submit'
          onClick={recRegister}>
          Recruiter Register</Button>
     
     Have an account? <Link to='/signin'>Login</Link>
   </Form>
 </Container>
  );
  
  
}

export default App;
