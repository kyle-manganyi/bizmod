import React,{ useState} from 'react'
import { Card,Segment,Header,Icon,Button } from 'semantic-ui-react'

import './Dashboard.css'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [mycvs, setMyCvs] = useState([])

    React.useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://saosa.herokuapp.com/api/Bizmod/get-cvs", requestOptions)
        .then(response => response.json())
        .then(result => setMyCvs(result))
        .catch(error => console.log('error', error));
      })


    const testing = (x) => x.map(i =>
        <div className="cv-contanier" key={i.key}>
            <span className="keys">{i.key}</span>
            <span className="values">{i.value}</span>
        </div>)

    return (
        <>
        <Card.Group centered>
        {
            mycvs.length > 0 ? mycvs.map(x =>(
                
                <Card key={x.id} className="cvs">
                        <div>
                        <div>
                        {testing(JSON.parse(x.cv))}
                        </div>
                    <button onClick={() => {
                var myHeaders = new Headers();
                myHeaders.append("accept", "*/*");
                
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  redirect: 'follow'
                };
                
                fetch("https://saosa.herokuapp.com/api/Bizmod/delete-cvs?id="+x.id, requestOptions)
                  .then(response => response.text())
                  .then(result => window.location.reload())
                  .catch(error => console.log('error', error));
                }}>Delete</button>
                    </div>  
                </Card>
                
            ))
            :null
        }
        </Card.Group>
        </>
    )
}

export default Dashboard