import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  const fetchMessage = async () => {
    try {
      const response = await fetch("/api/hello"); // This will proxy to http://localhost:3001/api/hello
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchMessage();
  // }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
