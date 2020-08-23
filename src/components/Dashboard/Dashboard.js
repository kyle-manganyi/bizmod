import React,{ useState,Fragment} from 'react'
import { Card,Icon } from 'semantic-ui-react'

const Dashboard = () => {

    const [data,setData] = useState([])
    const [cv, setCv] = useState([])
    // console.log(data)

    const fmtt = (data) => {
        const component = []
        for (const [key, value] of Object.entries(data[0])) {
            component.push(key)
            component.push(value)
        }
        setCv(component)
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

            <div>
                {
                    cv.length > 0 ?
                        cv.map((x) =><div>{x}</div>)
                    :null
                }
            </div>
        </Fragment>
    )
}

export default Dashboard