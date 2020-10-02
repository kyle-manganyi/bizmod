import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div className='container2'>
        <div style={{color:"#fff", zIndex:99999, maxWidth:"80%"}} >
           <h1 style={{fontWeight:"900"}}>We do Projects</h1>
           <h3 style={{fontWeight:"900",}}>
              Bizmod works with their clients to solve problems. We are
              proudly women-owned and driven by the positive impact
              we can instill in our clients organizations.
           </h3>
          
        </div>

        <div>
          <div style={{marginBottom:20, marginTop:25}}>
          <Button primary style={{width:150}} onClick={()=> window.location = 'signin'}>Sign In</Button>
          </div>
          <div style={{marginBottom:10}}>
          <Button primary style={{width:150}} onClick={()=> window.location = 'signup'}>Sign Up</Button>
          </div>
          <Button primary style={{width:150}} onClick={()=> window.location = 'recsignup'}>Recruiter Sign Up</Button>

            
        </div>
        </div>

    </div>
  );
}

export default App;
