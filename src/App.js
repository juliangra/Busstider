import "./App.css";
import BusTimes from "./BusTimes";
import Clock from "./Clock";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Ila til Gløshaugen</h1>
          <h1 className="logo">Joey#</h1>
        </div>
        <h1 className="clock">
          <Clock />
        </h1>
        <div className="routesHeader">
          <h3>Linje</h3>
          <h3>Rute</h3>
          <h3>Ankommer Ila</h3>
          <h3>Ankommer Gløshaugen</h3>
        </div>
        <hr />
        <BusTimes />
      </div>
    </div>
  );
}

export default App;
