import React,{useState} from 'react';
import './auth.css';
import { Link } from 'react-router-dom'
import { Input, Button, Form, Container,Dimmer,Loader } from 'semantic-ui-react'

function App() {

  const [ name,setName] = useState('')
  const [ surname,setSurname] = useState('')
  const [ numbers,setNumbers] = useState()
  const [ username,setUsername] = useState('')
  const [ password,setPassword] = useState('')
  const [passwordStrong, setPasswordStrong] = useState('')
  const [loading,setLoading] = useState(false)


const CandidateRegister = (e) => {
  e.preventDefault()
  setLoading(true)

  let pass = /[A-Z]/.test(password) && /[0-9]/.test(password);
  if(!pass){
    setLoading(false)
    setPasswordStrong("password must have capital letter and a number")
    return
  }
  setPasswordStrong("")

  const body = {
    "name": name,
    "surname": surname,
    "email": username,
    "password": password,
    "number": numbers,
    "type": "candidate"
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

fetch("https://saosa.herokuapp.com/api/Bizmod/registration", requestOptions)
  .then(response => response.text())
  .then(result => { 
    localStorage.setItem('user', result)
    setTimeout(() => {
      setLoading(false)
      window.location = '/Nav/user'
      }, 5000);
  })
  .catch(error => setLoading(false));
}

const RecruiterRegister = (e) => {
  e.preventDefault()
  setLoading(true)

  let pass = /[A-Z]/.test(password) && /[0-9]/.test(password);
  console.log(pass)
  if(!pass){
    setLoading(false)
    setPasswordStrong("password must have capital letter and a number")
    return
  }
  setPasswordStrong("")
  const body = {
    "name": name,
    "surname": surname,
    "email": username,
    "password": password,
    "number": numbers,
    "type": "recruiter"
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
  
  fetch("https://saosa.herokuapp.com/api/Bizmod/registration", requestOptions)
    .then(response => response.text())
    .then(result => { 
      localStorage.setItem('user', result)
      setTimeout(() => {
        setLoading(false)
        window.location = '/Nav/recruiter'
      }, 5000);
    })
    .catch(error => setLoading(false));
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
       <label>Email</label>
       <Input placeholder='Email'
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
       {
         passwordStrong
       }
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

     {
       loading ?  <Dimmer active>
       <Loader />
     </Dimmer> :
     <div>
       <Button 
       className='loginBtn' 
       primary 
       fluid 
       type='submit'
       onClick={CandidateRegister}
       >
      Candidate Register</Button>

      <Button 
          className='loginBtn' 
          primary 
          fluid 
          type='submit'
          onClick={RecruiterRegister}>
          Recruiter Register</Button></div>
     }

     
     
     Have an account? <Link to='/signin'>Login</Link>
   </Form>
 </Container>
  );
  
  
}

export default App;
