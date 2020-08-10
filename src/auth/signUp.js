import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom'
import { Input, Button, Form, Container } from 'semantic-ui-react'

function App() {
  return (
    <Container as='fieldset' className='loginContainer'>
    <legend><h1 style={{color:'#2185d0'}}>Register</h1></legend>
   <Form >

   <Form.Field required >
       <label>Full Names</label>
       <Input placeholder='fullname'
         icon='user' iconPosition='left' />
     </Form.Field>

     <Form.Field required >
       <label>Phone Number</label>
       <Input placeholder='phone number'
         icon='phone' iconPosition='left' />
     </Form.Field>

     <Form.Field required >
       <label>Username</label>
       <Input placeholder='username'
         icon='user' iconPosition='left' 
       />
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
       type='submit'>
           Register</Button>
     
     Have an account? <Link to='/signin'>Login</Link>
   </Form>
 </Container>
  );
}

export default App;
