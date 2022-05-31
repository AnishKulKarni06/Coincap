import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Table from './components/Table/Table';
function App() {

  const [visible,setVisible]=useState(50);
  const [flag,setFlag]=useState(true);


  return (
    <div className="App">
    <Navbar />
    <Banner/>
    <Table value={visible}/>

    {
      flag?<button class="button-18" role="button" onClick={()=>{
        setVisible(100)
        setFlag(!flag)
    }}>Load More</button>:
    <button class="button-18" role="button" onClick={()=>{
        setVisible(50)
        setFlag(!flag)
    }}>Show less</button>

    }
    
    </div>
  );
}

export default App;
