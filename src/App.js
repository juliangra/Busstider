import BusTimes from "./BusTimes";
import Clock from "./Clock";
import "./css/style.css";

// Endre disse til egne verdier
const app_name = "Busstider";
const departing_from = "Ila";
const arriving_at = "Gløshaugen";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>
            {departing_from} til {arriving_at}
          </h1>
          <h1 className="logo">{app_name}#</h1>
        </div>
        <h1 className="clock">
          <Clock />
        </h1>
        <div className="routesHeader">
          <h3>Linje</h3>
          <h3>Rute</h3>
          <h3>Ankommer {departing_from}</h3>
          <h3>Ankommer {arriving_at}</h3>
        </div>
        <hr />
        <BusTimes />
      </div>
    </div>
  );
}

export default App;
