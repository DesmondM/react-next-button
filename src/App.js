import React, {useState} from 'react';
import users from './data';
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  const [slicer, setSlicer]= useState(0)
  const getData = event =>{
    setData(event.target.value.toUpperCase())
    console.log(event.target.value)
  };
 const nextB =() =>{
      if(slicer<users.length){   
      setSlicer(slicer+1)
      }
      else{
        setSlicer(slicer-users.length)
      }
 }; 

 const back =() =>{
      if(slicer>0){   
      setSlicer(slicer-1)
      }
      else{
        setSlicer(slicer+users.length-1)
      }
 }; 
   
  return (
    <div className="App">
      <div> 
        {
          users.slice(slicer,slicer+1).map((user, index)=>{
            return <h3>{user.name}</h3>
          })
        }
      </div>
      
       
      <h1>Get input box values</h1>
      <h2>{data}</h2>
      {
        print?
        <h1>
          {data}
        </h1>
        :null
      }
      <input type="text" onChange ={getData}/>
      <button onClick={()=>setPrint(!print)}>Display</button>
      <button onClick={back}> Back </button>
      <button onClick={nextB}> Next </button>
    </div>
  );
}

export default App;
