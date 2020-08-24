import React ,{useState,useEffect} from 'react'

const Home = () => {

    const [recst,setRect] = useState([])
    const [recst2,setRect2] = useState([])

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

        fetch("https://localhost:5004/api/Farm/get-farms", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch("https://gentle-savannah-90866.herokuapp.com/user/allrecruiters", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => setRect(result))
        .catch(error => console.log('error', error));

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
    
            fetch("https://gentle-savannah-90866.herokuapp.com/user/allusers", requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => setRect2(result))
            .catch(error => console.log('error', error));
    }
    console.log(recst)
    return (
        <div>
        <div>recruiters</div>
           {
               recst.map(x => 
                   <div>{x.name}</div>
               )
           }
            <hr></hr>
           <div>Users</div>
           {
               recst2.map(x => 
                   <div>{x.name}</div>
               )
           }
           </div>

    )
}

export default Home