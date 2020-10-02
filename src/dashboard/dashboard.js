import React from 'react';
import './dash.css';
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {

    const [stats, setStats] = React.useState(null);

    React.useEffect(()=> {
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://saosa.herokuapp.com/api/Bizmod/stats", requestOptions)
        .then(response => response.json())
        .then(result => setStats(result))
        .catch(error => console.log('error', error));
    },[])


    const options = {
        animationEnabled: true,
        title: {
            text: "Client Distribution"
        },
        subtitles: [{
            text: "Bizmod",
            verticalAlign: "center",
            fontSize: 20,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###",
            dataPoints: [
                { name: "Candidates", y: stats !== null ? stats.candidates : null },
                { name: "recruiters", y: stats !== null ? stats.recruiters : null },
                { name: "vacancies", y: stats !== null ? stats.vacancies : null },
            ]
        }]
    }
  return (
    <div>
        <div style={{marginBottom:10, marginTop:10}}><h1 style={{color:'#2185d0'}}>Dashboard</h1></div>
      <div className='cover-image'>
        <div className="container3">
        <div style={{color:"#fff", zIndex:99999, maxWidth:"60%"}} >
           <h1 style={{fontWeight:"900"}}>We do Projects</h1>
           <h3 style={{fontWeight:"900"}}>
              Bizmod works with their clients to solve problems. We are
              proudly women-owned and driven by the positive impact
              we can instill in our clients organizations.
           </h3>
           </div>
          
        </div>
    </div>
    <div style={{width:"60%", marginTop:20}}>
    <CanvasJSChart options = {options}/>
    </div>
    </div>
  );
}

export default App;
