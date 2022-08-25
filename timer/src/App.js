import './App.css';
import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";

function App() {
  return (
    

    <div className="App">
       <div className='priya'>GOOGLE CountdownTimer</div>
       
   <CountdownTimer 
   countdownTimestampMs= {1628454873000}/>
    </div>
  );
}

export default App;
