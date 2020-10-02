import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    advice: "",
  });
  const fetchAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice").then((data) =>
      data.json()
    );
    setState(data.slip);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={"app"}>
      <div className="card">
        <h1 className={"heading"}>{state.advice}</h1>
        <button className={"button"} onClick={fetchAdvice}>
          <span>Give me a ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
