import React,{ useState,Fragment,useEffect } from 'react'
import { Card,Segment,Header,Icon,Button, Dropdown,Table } from 'semantic-ui-react'

import './Dashboard.css'

const Dashboard = () => {

    const [select, setSelected] = useState("")
    const [contractName, setContractName] = useState()
    const [contractData, setContractData] = useState()
    const [users,setUsers] = useState([])
    const [contracts,setContracts] = useState([])

    useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("accept", "*/*");

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };


      fetch("https://saosa.herokuapp.com/api/Bizmod/users", requestOptions)
      .then(response => response.json())
      .then(result => {
        let tempArray = []
          result.forEach(element => {
            tempArray.push( {
              key: `${element.id}  ${element.name}`,
              text: `${element.id}  ${element.name}`,
              value: `${element.id}  ${element.name}`,
            })
          },
          setUsers(tempArray)
          );
      } )
      .catch(error => console.log('error', error));

      getContracts()

      },[]);

      const getContracts = () =>{
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://saosa.herokuapp.com/api/Bizmod/getContracts", requestOptions)
          .then(response => response.json())
          .then(result => setContracts(result))
          .catch(error => console.log('error', error));
      }

    const sendContract = () =>{
      var myHeaders = new Headers();
      myHeaders.append("accept", "*/*");
      myHeaders.append("Content-Type", "application/json-patch+json");
      let userID = select.split(" ")[0]
      var raw = {
        "name":contractName,
        "contract":contractData,
        "status":"Pending",
        "userID":userID
      };

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
      };

      fetch("https://saosa.herokuapp.com/api/Bizmod/sendContract", requestOptions)
        .then(response => response.json())
        .then(result => setContracts(result))
        .catch(error => console.log('error', error));
    }


    return (
        <Fragment>
        <Segment placeholder>
                <Header icon>
                <Icon name='file word outline' />
                Upload Contract
            </Header>
            <Button secondary size="small">
            <input type='file' onChange={event => {
                let selectedFile = event.target.files;
                
                //Check File is not Empty
                if (selectedFile.length > 0) {
                  let file = null;
                let fileName = "";
                    // Select the very first file from list
                    let fileToLoad = selectedFile[0];
                    setContractName(fileToLoad.name);
                    // FileReader function for read the file.
                    let fileReader = new FileReader();
                    // Onload of file read the file content
                    fileReader.onload = function(fileLoadedEvent) {
                        file = fileLoadedEvent.target.result;
                        // Print data in console
                        setContractData(file);
                        // let pdfWindow = window.open("")
                        // pdfWindow.document.write("<iframe width='100%' height='100%' src='" + encodeURI(file) + "'></iframe>")
                        // window.open(encodeURI(file)); 

                    };
                    // Convert data to base64
                    fileReader.readAsDataURL(fileToLoad);
                }
                
            }}/>
            </Button>
            
            <Dropdown
                placeholder='Select User'
                fluid
                selection
                options={users}
                onChange={(event, data) => setSelected(data.value)}
            />
            <Button secondary size="small" onClick={() => sendContract()}>
                Send Contracts
            </Button>
        </Segment>
        <div style={{maxHeight:"120vh",overflowY:"scroll"}}>
            <Table celled padded style={{maxHeight:"120vh"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>user ID</Table.HeaderCell>
        <Table.HeaderCell>status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {
        contracts && contracts.map(x => (
          <Table.Row>
            <Table.Cell>
            {x.name}
            </Table.Cell>
            <Table.Cell>{x.userID}</Table.Cell>
            <Table.Cell textAlign='right'>
              {x.status}
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
         
    </div>
        </Fragment>
    )
}

export default Dashboard