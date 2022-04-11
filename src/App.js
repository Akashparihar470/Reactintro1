import "./App.css"

function App() {
  const opr = ["Android","Blackberry","iphone", "Windows Phone"];
  const man = ["samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
     <h1>Mobile Operating System</h1>
     {opr.map((el) =>
       <li>{el}</li>
     )}
     <h1>Mobile Manufacturers</h1>
     {man.map((el) =>(
       <li className={`${el === "HTC" || el === "samsung"? "squaree": "circlee"}`}>
         {el}</li>
     ))}
    </div>
  );
}

export default App;
