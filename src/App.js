import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));


      
    return ()=>{
     console.log("clean-Up"); 
    }
  }, [resourceType]);

  return (
    <div className="App">
      <div>{windowWidth}</div>

      <br />
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <button
        className={"button"}
        onClick={() => {
          setResourceType("Posts");
        }}
      >
        Posts
      </button>
      <button
        className={"button"}
        onClick={() => {
          setResourceType("Users");
        }}
      >
        Users
      </button>
      <button
        className={"button"}
        onClick={() => {
          setResourceType("Comments");
        }}
      >
        Comments
      </button>
      <h2>{resourceType}</h2>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default App;
