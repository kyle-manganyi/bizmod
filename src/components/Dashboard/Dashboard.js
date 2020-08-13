import React,{ useState,Fragment} from 'react'
import { Card,Icon } from 'semantic-ui-react'

const Dashboard = () => {

    const [data,setData] = useState([])
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
                fetch("https://gentle-savannah-90866.herokuapp.com/user/cv", requestOptions)
                .then(response => response.text())
                .then(result => setData( JSON.parse(result) ))
                .catch(error => console.log('error', error));
            }}/>
        </form>

            <div>
                {
                    data.length > 0 ?
                        <div>
                        {
                            data.map(e => 
                                <Card>
                                <Card.Content header={`${e.Name} - ${e.Surname}`} />
                                <Card.Content description={`Country: ${e.Country}`} />
                                <Card.Content extra>
                                    <Icon name='phone' />
                                </Card.Content>
                                </Card>
                               
                            )        
                        }
                        </div>
                    :null
                }
            </div>
        </Fragment>
    )
}

export default Dashboard