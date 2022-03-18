import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [seconds, setSeconds] = useState(0)
    const [periods, setPeriods] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setPeriods(periods + ".")
            setSeconds(seconds + 1)
            if(seconds % 4 === 0) {
                setPeriods("")
            }
        }, 1300);
        return () => {
            clearInterval(interval)
        }
    })

  return (
    <div className="App">
      <header className="App-header">
        <p>
         <code>Work-in-progress {periods}</code>
        </p>
        <p>
            <code>
                <a href="https://www.linkedin.com/in/august-sosick-6334ab170/">Linkedin</a>
            </code>
        </p>
      </header>
    </div>
  );
}

export default App;
