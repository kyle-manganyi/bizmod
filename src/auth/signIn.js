import React from 'react';
import '../App.css';
import { Input, Button, Form, Container } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Container as='fieldset' className='loginContainer'>
    <legend><h1 style={{color:'#2185d0'}}>Login</h1></legend>
   <Form onSubmit={()=> window.location = '/Nav'}>

     <Form.Field required >
       <label>Username</label>
       <Input placeholder='username'
         icon='user' iconPosition='left' />
     </Form.Field>
     
     <Form.Field required>
       <label>Password</label>
       <Input 
         icon='lock' 
         iconPosition='left' 
         placeholder=' password'
         type='password'
       />
     </Form.Field>
     <Button className='loginBtn' primary fluid type='submit' 
      >Login</Button>
       Don't have an account? <Link to='/signup'>Register</Link>
   </Form>
 </Container>
  );
}

export default App;
