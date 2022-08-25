import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MainMarker';
import { useState } from 'react';

const ManinSimpleMap = (props) => {
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
  const zoom = -2;

  const defaultP = {
    center: {
      lat: 21.394436,
      lng: 110.231152,
    },
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultP.center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker name={'₩ 310,000'} lat={36.99073} lng={128.18533} />
        <Marker lat={-8.4509863} lng={115.4842055} />
        <Marker lat={12.5180029} lng={127.3888} />
        <Marker lat={37.2929924} lng={99.9780262} />
        <Marker lat={-8.57391} lng={115.21791} />
        <Marker lat={18.8351615} lng={98.9752576} />
        <Marker lat={11.31467} lng={119.42183} />
        <Marker lat={-8.4502} lng={115.4838} />
        <Marker lat={-8.40371} lng={116.06805} />
        <Marker lat={2.44363} lng={102.20927} />

        <Marker lat={16.68247} lng={101.03182} />
        <Marker lat={24.8739} lng={74.61565} />
        <Marker lat={18.8352} lng={98.9748} />
        <Marker lat={-8.47288} lng={115.44081} />
        <Marker lat={-8.57381} lng={116.46767} />
        <Marker lat={-8.4393} lng={115.3113} />
        <Marker lat={23.17084} lng={121.39317} />
        <Marker lat={-8.51964} lng={115.2755114} />
        <Marker lat={-8.57508} lng={115.2153614} />
        <Marker lat={37.11579} lng={128.5381} />
        <Marker lat={37.15579} lng={128.528101} />
        <Marker lat={37.33244} lng={128.36197} />
        <Marker lat={36.99073} lng={128.18533} />
      </GoogleMapReact>
    </div>
  );
};

export default ManinSimpleMap;