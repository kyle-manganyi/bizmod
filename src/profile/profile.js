import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import { Input, Button, Form, Container } from 'semantic-ui-react'
function App() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [ name,setName] = useState(user.name)
  const [ surname,setSurname] = useState(user.surname)
  const [ numbers,setNumbers] = useState(user.number)
  const [ username,setUsername] = useState(user.email)
  const [ password,setPassword] = useState(user.password)

  const CandidateRegister = (e) => {
    e.preventDefault()
  
    const body = {
      "name": name,
      "surname": surname,
      "email": username,
      "password": password,
      "number": numbers,
      "type": user.type
    }
  
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json-patch+json");
    
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body),
      redirect: 'follow'
    };
    
    fetch("https://saosa.herokuapp.com/api/Bizmod/update", requestOptions)
      .then(response => response.text())
      .then(result => { localStorage.setItem('user', result)})
      .catch(error => console.log('error', error));
  }


  return (
    <Container as='fieldset' className='loginContainer'>
    <legend><h1 style={{color:'#2185d0'}}>Update Profile</h1></legend>
   <Form >

   <Form.Field required >
       <label>Name</label>
       <Input placeholder={user.name}
         icon='user' 
         iconPosition='left' 
         
         onChange={ val => setName(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Surname</label>
       <Input placeholder={user.surname}
         icon='user' 
         iconPosition='left' 
         
         onChange={ val => setSurname(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Phone Number</label>
       <Input placeholder={user.number}
         icon='phone' iconPosition='left' 
         onChange={ val => setNumbers(val.target.value)}/>
     </Form.Field>

     <Form.Field required >
       <label>Email</label>
       <Input placeholder={user.email}
         icon='user' iconPosition='left'
         onChange={ val => setUsername(val.target.value)}
       />
     </Form.Field>
     
     <Form.Field required>
       <label>Password</label>
       <Input 
         icon='lock' 
         iconPosition='left' 
         placeholder="******"
         type='password'
         onChange={ val => setPassword(val.target.value)}
       />
     </Form.Field>

     <Button 
       className='loginBtn' 
       primary 
       fluid 
       type='submit'
       onClick={CandidateRegister}
       >
      Update details</Button>


   </Form>
 </Container>
  );
}

export default App;
