import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({
    advice: "",
  });
  useEffect(() => {
    const fetchAdvice = async () => {
      const data = await fetch(
        "https://api.adviceslip.com/advice"
      ).then((data) => data.json());
      setState(data.slip);
    };
    fetchAdvice();
  }, []);

  return (
    <div className={"app"}>
      <div className="card">
        <h1 className={"heading"}>{state.advice}</h1>
        <button className={"button"}>
          <span>Give me ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
