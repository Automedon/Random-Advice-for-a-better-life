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
  console.log(state);
  return <h1>{state.advice}</h1>;
}

export default App;
