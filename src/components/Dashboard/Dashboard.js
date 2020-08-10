import React,{ useState,Fragment} from 'react'
import { Card, Icon } from 'semantic-ui-react'


function sendinfo(data) {
    console.log(data)
    var formdata = data;

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("http://localhost:3001/user/cv", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const Dashboard = () => {

    const [data,setData] = useState({})
    return (
        <Fragment>
        <form>
            <input type='file' onChange={e => {
                var formdata = new FormData();
                formdata.append("cv", e.target.files[0], "test.docx");

                var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };

                fetch("http://localhost:3001/user/cv", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            }}/>
        </form>

        <Card
            // image={result}
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
           
        />
        </Fragment>
    )
}

export default Dashboard