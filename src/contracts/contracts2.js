import React,{ useState,Fragment, useEffect} from 'react'
import { Card,Segment,Header,Icon,Button, Dropdown,Table } from 'semantic-ui-react'

import './Dashboard.css'


const Dashboard = () => {

  const [contracts, setContracts] = useState([])
  const [contractData, setContractData] = useState()
  const user = JSON.parse(localStorage.getItem("user"))



  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://saosa.herokuapp.com/api/Bizmod/getUsersContracts?userID="+user.id, requestOptions)
      .then(response => response.json())
      .then(result => setContracts(result))
      .catch(error => console.log('error', error));
    
    },[]);

    const download = (file) =>{

      let pdfWindow = window.open("")
      pdfWindow.document.write("<iframe width='100%' height='100%' src='" + encodeURI(file) + "'></iframe>")
    }

    const updateContract = (data, contract) =>{
      var myHeaders = new Headers();
      myHeaders.append("accept", "*/*");
      myHeaders.append("Content-Type", "application/json-patch+json");
      var raw = {
        "id":contract.id,
        "name":contract.name,
        "contract":data,
        "status":"aprroved",
        "userID":contract.userID
      };

      console.log("inside")

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
      };

      fetch("https://saosa.herokuapp.com/api/Bizmod/updateContract", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <Fragment>

        <div style={{maxHeight:"120vh",overflowY:"scroll"}}>
            <Table celled padded style={{maxHeight:"120vh"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>name</Table.HeaderCell>
        <Table.HeaderCell>download</Table.HeaderCell>
        <Table.HeaderCell>submit</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contracts && contracts.map(x => (
          <Table.Row>
        <Table.Cell>
        {x.name}
        </Table.Cell>
        <Table.Cell><Button secondary size="small" onClick={() => download(x.contract)}>
            download
            </Button></Table.Cell>
        <Table.Cell>
        <Button secondary size="small">
        <input type='file' onChange={event => {
                let selectedFile = event.target.files;
                
                //Check File is not Empty
                if (selectedFile.length > 0) {
                  let file = null;
                let fileName = "";
                    // Select the very first file from list
                    let fileToLoad = selectedFile[0];
                    // FileReader function for read the file.
                    let fileReader = new FileReader();
                    // Onload of file read the file content
                    fileReader.onload = function(fileLoadedEvent) {
                        file = fileLoadedEvent.target.result;
                        // Print data in console
                        setContractData(file);
                        console.log("dfdsksdjkvnsdfkjvdsndsvbbdjlsvndsi")
                        updateContract(file, x)
                        // let pdfWindow = window.open("")
                        // pdfWindow.document.write("<iframe width='100%' height='100%' src='" + encodeURI(file) + "'></iframe>")
                        // window.open(encodeURI(file)); 

                    };
                    // Convert data to base64
                    fileReader.readAsDataURL(fileToLoad);
                }
                
            }}/>
            </Button>
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