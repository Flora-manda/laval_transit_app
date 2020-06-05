import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.5757802,
    longitude: -73.7530656,
    zoom: 11.5,
    width: "50vw",
    height: "50vh",
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/fuwadiegwu/ckb2gfamh0t431ip3peld2jn8"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        //markers go here in future
      </ReactMapGL>
    </div>
  );
}

export default App;
