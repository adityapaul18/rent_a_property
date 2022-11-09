import { useState } from 'react';
import './App.css';
import Filterbar from './components/Filterbar';
import Header from './components/Header';
import Results from './components/Results';
import dt from './data.json'

function App() {
  const [location, setlocation] = useState("")
    const [type, settype] = useState("")
    const [beds, setbeds] = useState(null)
    const [price, setprice] = useState(null)
    const [data, setdata] = useState(dt)

    // fuction

    const filter = async () => {
      console.log({type,beds,location,price})
      setdata(dt)
      if(type !== ""){
        var k = await dt.filter(word => word.type === type);
        setdata(k)
      }
      if(location !== ""){
        k = await k.filter(word => word.loc === location);
        setdata(k)
      }
      if(beds !== null){
        k = await k.filter(word => word.beds <= beds);
        setdata(k)
      }
      if(price !== null){
        k = await k.filter(word => word.price < price);
        setdata(k)
      }
    }
  return (
    <div className="App">
      <Header/>
      <div className='appBodyCont'>
        <div  className='appHeading'>
          <h2 >Search yout property</h2>
        </div>
        <Filterbar setbeds={setbeds} setlocation={setlocation} setprice={setprice} settype={settype} filter={filter}/>
        <Results data={data}/>
      </div>
    </div>
  );
}

export default App;
