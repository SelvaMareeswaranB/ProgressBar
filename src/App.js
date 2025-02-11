import { useEffect, useState } from "react";
import ProgressBar from "./Components/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => {
          setStatus(true);
        }}
      />
      <div>{status ? "Completed !!!" : "Loading...."}</div>
    </div>
  );
}
