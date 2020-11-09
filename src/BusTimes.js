import React, { useEffect, useState } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({
  clientName: "busstider",
});

// Endre dette til lengden på turen
const route_length = 10;

const BusTimes = () => {
  const [busStation, setBusStations] = useState([]);

  useEffect(() => {
    async function generateStops() {
      const stops = await service.getDeparturesBetweenStopPlaces(
        /*
        
        Finn ID til dine stoppesteder her:
        https://developer.entur.org/pages-geocoder-intro
        
          */
        'NSR:StopPlace:60890',
        'NSR:StopPlace:44085',
        // Viser her 9 resultat; endre dette om ønskelig
        { limit: 9 }
      )
      setBusStations(stops)
      console.log('Setting stops')
    }

    generateStops()
    const newStopsInterval = setInterval(generateStops, 1000)

    return () => clearInterval(newStopsInterval)
  }, [])

  return (
    <div className="routes">
      {busStation.map((route) => {
        return <Route key={route.serviceJourney.id} route={route} />;
      })}
    </div>
  );
};

export default BusTimes;

const Route = (props) => {
  const route = props.route;

  let arrival_at_destination;

  let departure_from_origin;

  if (
    route.aimedArrivalTime.slice(11, 16) ===
    route.expectedDepartureTime.slice(11, 16)
  ) {
    departure_from_origin = (
      <h3 className="g-bg">{route.aimedArrivalTime.slice(11, 16)}</h3>
    );
  } else {
    departure_from_origin = (
      <div className="updatedArrivalTime">
        <h3 className="ignoreTime">{route.aimedArrivalTime.slice(11, 16)}</h3>
        <h3 className="correctTime">
          {route.expectedDepartureTime.slice(11, 16)}
        </h3>
      </div>
    );
  }

  if (
    route.aimedArrivalTime.slice(11, 16) ===
    route.expectedDepartureTime.slice(11, 16)
  ) {
    arrival_at_destination = new Date(
      // Had to add milliseconds for Safari support
      route.aimedArrivalTime.slice(0, 19) + ".000+01:00"
    );
  } else {
    arrival_at_destination = new Date(
      route.expectedDepartureTime.slice(0, 19) + ".000+01:00"
    );
  }

  arrival_at_destination.setMinutes(
    arrival_at_destination.getMinutes() + route_length
  );
  arrival_at_destination = new Date(arrival_at_destination.getTime());

  return (
    <div className="RouteWrapper">
      <div className="Route">
        <div className="routeIcon">
          <h2>{route.serviceJourney.journeyPattern.line.publicCode}</h2>
        </div>
        <h3>{route.destinationDisplay.frontText}</h3>
        {departure_from_origin}
        <h3>ca. {arrival_at_destination.toTimeString().slice(0, 5)}</h3>
      </div>
      <hr />
    </div>
  );
};
