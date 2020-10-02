import React,{ useState} from 'react'
import { Card,Segment,Header,Icon,Button } from 'semantic-ui-react'

import './Dashboard.css'

const Dashboard = () => {

    const [cv, setCv] = useState([])
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

        fetch("https://saosa.herokuapp.com/api/Bizmod/get-cv?id="+user.id, requestOptions)
        .then(response => response.json())
        .then(result => setMyCvs(result))
        .catch(error => console.log('error', error));
      })


    const fmtt = (data) => {

        const mydata = []
        for (const [ _,values ] of Object.entries(data)) {
            const component = []
            for (const [key, value] of Object.entries(values)) {
                component.push({key, value})
            }
            mydata.push(component)
        }
        setCv(mydata)
    }

    const testing = (x) => x.map(i =>
        <div className="cv-contanier" key={i.key}>
            <span className="mykeys">{i.key}</span>
            <span className="values">{i.value}</span>
        </div>)

    return (
        <>
        <Segment placeholder>
                <Header icon>
                <Icon name='file word outline' />
                Select files to upload
            </Header>
            <Button secondary size='huge'>
            <input type='file' name='cv' multiple onChange={e => {
                var formdata = new FormData();
                for(let i = 0; i < e.target.files.length; i++){
                    formdata.append("cv", e.target.files[i], e.target.files[i].name)
                }
                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };
                fetch("http://localhost:3001/user/cv", requestOptions)
                .then(response => response.text())
                .then(result => fmtt( JSON.parse(result) ))
                .catch(error => console.log('error', error));
            }}/>
            </Button>
        </Segment>
        <Card.Group centered>
        {
            cv.length > 0 ? cv.map(x =>(
                <Card raised={true} color='yellow' key={x} className="cvs">
                    {testing(x)}
                </Card>
                
            ))
            :null
        }
        </Card.Group>
        </>
    )
}

export default Dashboard