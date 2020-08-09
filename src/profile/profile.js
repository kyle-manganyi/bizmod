import React from 'react';
import { Input, Button, Form, Select } from 'semantic-ui-react'

function App() {
    const options = [
        { key: 'all', text: 'All', value: 'all' },
        { key: 'articles', text: 'Articles', value: 'articles' },
        { key: 'products', text: 'Products', value: 'products' },
      ]
  return (
    <div>
    <div style={{marginBottom:10, marginTop:10}}><h1 style={{color:'#2185d0'}}>Profile</h1></div>

    <Form >

     <Form.Field required >
       <label>Enter Compnay Name</label>
       <Input placeholder='company name' transparent
         icon='user' iconPosition='left'/>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
       <label>Which Field</label>
       <Input placeholder='field' transparent
         icon='user' iconPosition='left'/>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
       <label>Interested In</label>
       <Input placeholder='Interests' transparent
         icon='user' iconPosition='left'/>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
       <label>Address</label>
       <Input placeholder='Adress' transparent
         icon='user' iconPosition='left'/>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
       <label>Email</label>
       <Input placeholder='Email' transparent
         icon='user' iconPosition='left'/>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
     <div>
    <Input list='languages' placeholder='Select an option' transparent icon='angle down' iconPosition='right'/>
    <datalist id='languages'>
      <option value='English'>English</option>
      <option value='Chinese'>Chinese</option>
      <option value='Dutch'>Dutch</option>
    </datalist>
  </div>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     <Form.Field required >
     <div>
    <Input list='languages' placeholder='Option Selected' transparent icon='angle down' iconPosition='right'/>
    <datalist id='languages'>
      <option value='English'>English</option>
      <option value='Chinese'>Chinese</option>
      <option value='Dutch'>Dutch</option>
    </datalist>
  </div>
         <hr style={{marginBottom:30}}></hr>
     </Form.Field>
     
   </Form>
     
    </div>
  );
}

export default App;
