import React,{ useState,Fragment} from 'react'
import { Card,Segment,Header,Icon,Button } from 'semantic-ui-react'

import './Dashboard.css'

const Dashboard = () => {

    const [cv, setCv] = useState([])

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

    const testing = (x) => x.map(i =><div key={i.key}><span className="keys">{i.key}</span><span className="values">{i.value}</span></div>)

    return (
        <Fragment>
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
        {
            cv.length > 0 ? cv.map(x =>(
               <Card key={x} className="cvs">
                {testing(x)}
               </Card>
            ))
            :null
        }
        </Fragment>
    )
}

export default Dashboard