import React,{ useState,Fragment} from 'react'
import { Card } from 'semantic-ui-react'

const Dashboard = () => {

    const [cv, setCv] = useState([])

    const fmtt = (data) => {

        const mydata = []
        for (const [_, values] of Object.entries(data)) {
            const component = []
            for (const [key, value] of Object.entries(values)) {
                component.push(key +'\t'+ value)
            }
            mydata.push(component)
        }
        setCv(mydata)
    }

    return (
        <Fragment>
        <form>
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
        </form>
        {
            cv.length > 0 ? cv.map((x) =>(
                x.map(i =><Card>{i}</Card>)
            ))
            :null
        }
        </Fragment>
    )
}

export default Dashboard