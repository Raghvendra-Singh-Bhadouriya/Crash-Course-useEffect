import './App.css';
import {useState, useEffect} from "react";
import SubscribingEvent  from "./subscribe"
import TitleUpdateComponent from "./title"
function App() {
  let [data, setData] = useState([]);


  async function fetchData(){
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let finalres = await res.json();
      setData(finalres);
      console.log(finalres)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchData()
  },[]);

  return (
    <div className="App">
      {data ? (
        <ul>
          {data.map((d) => (
            <li key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.body}</p>
            </li>
          ))}
        </ul>
      ):(
        <p>...Loading</p>
      )}
<SubscribingEvent/>
<TitleUpdateComponent/>
    </div>
  );
}

export default App;