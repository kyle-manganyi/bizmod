import React ,{useState,useEffect} from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'


const Home = () => {

    const [users,setUsers] = useState([])

    useEffect(() => {
        recs()
      },[]);

    const recs = () => {

        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };


        fetch("https://saosa.herokuapp.com/api/Bizmod/users", requestOptions)
        .then(response => response.json())
        .then(result => setUsers(result))
        .catch(error => console.log('error', error));
    }
    return (
        <div style={{maxHeight:"120vh",overflowY:"scroll"}}>
            <Table celled padded style={{maxHeight:"120vh"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>surname</Table.HeaderCell>
        <Table.HeaderCell>number</Table.HeaderCell>
        <Table.HeaderCell>email</Table.HeaderCell>
        <Table.HeaderCell>type</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
             users.map(x => 
                <Table.Row>
        <Table.Cell>
         {x.name}
        </Table.Cell>
        <Table.Cell>{x.surname}</Table.Cell>
        <Table.Cell>
            {x.number}
        </Table.Cell>
        <Table.Cell textAlign='right'>
          {x.email}
        </Table.Cell>
        <Table.Cell>
         {x.type}
        </Table.Cell>
      </Table.Row>
            )
        }
      
    </Table.Body>
  </Table>
         
    </div>

    )
}

export default Home