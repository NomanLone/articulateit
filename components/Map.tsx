import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const defaultCenter = { lat: 40.748817, lng: -73.985428 };

const defaultOptions = { scrollwheel: false };

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

export default Map