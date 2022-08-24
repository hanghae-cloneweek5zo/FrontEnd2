import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { useState } from "react";





const SimpleMap = (props) => {
  
  console.log(props.lng);
  const getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const [zoom, setZoom] = useState(14);

  const defaultProps = {
        center: {
          lat : Number(props.lat),
          lng : Number(props.lng)
        }
      }

  



  return (
      <div style={{ height: '480px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker
          lat= {props.lat}
          lng={props.lng}
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;











// 기본 틀
// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: -8.57472037113586,
//       lng: 115.21358675329932
//     },
//     zoom: 14
//   };
  

//   // -8.57472037113586, 115.21358675329932

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '480px', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyCMdWVkt3jJJQiFydnsTVE2Lnnq4wYqj4c' }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >

//         <AnyReactComponent
//           lat={-8.57472037113586}
//           lng={115.21358675329932}
//           text= {<TbBrandAirbnb size={25} color="rgb(227,28,91)"/>}
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

