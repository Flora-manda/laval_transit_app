import React from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnV3YWRpZWd3dSIsImEiOiJja2IyZmhiYmYwOXJrMnNtdnVjcmVhemxrIn0.Wxndp_gEm8LECs4yr0smXA";

class App extends React.Component {
  componentDidMount() {
    // create map container
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-73.707092, 45.612499],
      zoom: 12,
    });
    // fetch bbox values from backend and constrain mapbox direction inputs
    const url = "http://localhost:3002/mapbox";
    const response = fetch(url)
      .then((res) => res.json())
      .then((bboxData) => {
        const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: "metric",
          profile: "mapbox/driving",
          geocoder: {
            bbox: bboxData,
          },
        });

        map.addControl(directions, "top-left");
        console.log(bboxData);
      })
      .catch((error) => console.log({ error }));
    // add zoom navigation feature to map
    map.addControl(new mapboxgl.NavigationControl());
  }

  render() {
    return (
      <div ref={(div) => (this.mapWrapper = div)} className="mapWrapper" />
    );
  }
}
export default App;
