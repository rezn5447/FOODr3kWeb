import React, { Component } from 'react';
import { KEY } from '../.env'
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
}

const params = { v: '3.exp', key:KEY }

class Map extends Component {
  componentWillMount() {

  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onClick(e){
    console.log('onClick', e);
  }

  render() {
    return(
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Find a Place to Eat:'}
        params={params}
        onMapCreated={this.onMapCreated}
      >
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'Hello, React =)'}
            onCloseClick={this.onCloseClick}
          />
          <Circle
            lat={coords.lat}
            lng={coords.lng}
            radius={500}
            onClick={this.onClick}
          />
        </Gmaps>
    );
  }
}


export default Map;
