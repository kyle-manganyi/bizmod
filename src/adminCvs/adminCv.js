import React,{ useState} from 'react'
import { Card,Segment,Header,Icon,Button,Divider } from 'semantic-ui-react'
import { renderToString } from "react-dom/server";

import jsPDF from "jspdf";


import './Dashboard.css'

const Dashboard = () => {
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

        fetch("https://saosa.herokuapp.com/api/Bizmod/get-cvs", requestOptions)
        .then(response => response.json())
        .then(result => setMyCvs(result))
        .catch(error => console.log('error', error));
      })

      const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
      const colstyle = {
        width: "30%"
      };
      const tableStyle = {
        width: "100%"
      };

      const Prints = (props) => (
        <div>
          {
              props.props.map(i =>
                <div className="cv-contanier" key={i.key}>
                    <span className="keys">{i.key}</span>
                    <span className="values">{i.value}</span>
                </div>)
          }
        </div>
      );

      const jsPdfGenerator = (cv) => {

        const string = renderToString(<Prints props={cv}/>);
  
          const pdf = new jsPDF("p", "mm", "a4");

          pdf.fromHTML(string);
            pdf.save("pdf");
      }


      const testing = (x) => x.map(i =>

        <>
        { i.value.length === 0 && <Divider />}

            <div className="cv-contanier" key={i.key}>
                <span className="mykeys">{i.key}</span>
                <span className="values">{i.value.replace(':','')}</span>
            </div>
        
        </>
    )

    return (
        <>
        <Card.Group centered>
        {
            mycvs.length > 0 ? mycvs.map(x =>(
                
                <Card key={x.id} className="cvs">
                        <div>
                        <div>
                        {testing(JSON.parse(x.cv))}
                        </div>
                    <button onClick={() => {
                var myHeaders = new Headers();
                myHeaders.append("accept", "*/*");
                
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  redirect: 'follow'
                };
                
                fetch("https://saosa.herokuapp.com/api/Bizmod/delete-cvs?id="+x.id, requestOptions)
                  .then(response => response.text())
                  .then(result => window.location.reload())
                  .catch(error => console.log('error', error));
                }}>Delete</button>
                <button onClick={() => jsPdfGenerator(JSON.parse(x.cv))}>save</button>
                    </div>  
                </Card>
                
            ))
            :null
        }
        </Card.Group>
        </>
    )
}

export default Dashboard