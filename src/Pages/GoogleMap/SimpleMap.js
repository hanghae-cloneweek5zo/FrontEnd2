import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { useState } from 'react';

const SimpleMap = (props) => {
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }],
        },
      ],
    };
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const [zoom, setZoom] = useState(14);

  const defaultProps = {
    center: {
      lat: Number(props.lat),
      lng: Number(props.lng),
    },
  };

  return (
    <div style={{ height: '480px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;