import React,{ useState,Fragment} from 'react'
import { Card } from 'semantic-ui-react'

const Dashboard = () => {

    const [data,setData] = useState()
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
                .then(result => setData(JSON.parse(result)))
                .catch(error => console.log('error', error));
            }}/>
        </form>
            { data && data.forEach(function (item) {
                console.log(item)
                return `<h1>${item.name}</h1>`
            })}
        </Fragment>
    )
}

export default Dashboard