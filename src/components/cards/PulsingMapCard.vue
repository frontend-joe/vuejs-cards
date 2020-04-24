<template>
  <Card>
    <MapWrapper>
      <LMap
        style="width: 100%; height: 100%;"
        :options="mapOptions"
        :zoom="zoom"
        :center="center"
      >
        <LGeoJson
          :options="options"
          :geojson="require('@/assets/geojson/ukLow')"
        />
        <LMarker
          v-for="marker in markers"
          :key="marker.id"
          :latLng="marker.latLng"
        >
          <LIcon>
            <MarkerCircle />
            <MarkerPulse />
          </LIcon>
        </LMarker>
      </LMap>
    </MapWrapper>
  </Card>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { LMap, LGeoJson, LMarker, LIcon } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

const Card = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: #f3f3f3;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
  transform: translateY(-30px);

  & .leaflet-container {
    background-color: rgba(0, 0, 0, 0);
  }

  & .leaflet-container .leaflet-control-attribution {
    font-family: "Alata";
    background: transparent;
    padding-right: 1rem;
  }

  & .leaflet-control-attribution a {
    color: rgba(131, 98, 208, 0.57);
  }
`;

const MarkerCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #8362d0;
  border-radius: 50%;
`;

const markerPulseAnimation = keyframes`
  0%   {
    transform: scale(0, 0);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
`;

const MarkerPulse = styled.div`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 0;
  box-shadow: 0 0 0 15px #8362d0;
  animation: ${markerPulseAnimation} 1.75s ease-out;
  animation-iteration-count: infinite;
`;

export default {
  components: {
    Card,
    MapWrapper,
    LMap,
    LGeoJson,
    LMarker,
    LIcon,
    MarkerCircle,
    MarkerPulse
  },
  data() {
    return {
      zoom: 5,
      center: [55.3781, -4.2453],
      bounds: null,
      geojson: null,
      options: {
        style: {
          color: "#f3f3f3",
          weight: 1,
          fill: true,
          fillColor: "#dadada",
          //fillColor: "rgba(131, 98, 208, 0.25)",
          fillOpacity: 1
        }
      },
      mapOptions: {
        scrollWheelZoom: false,
        tap: false,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      },
      markers: [
        {
          latLng: [52.4862, 0.4904]
        },
        {
          latLng: [51.4862, 0.2904]
        },
        {
          latLng: [53.4862, -0.5904]
        },
        {
          latLng: [55.4862, -1.9904]
        },
        {
          latLng: [52.4862, -2.9904]
        },
        {
          latLng: [54.4862, -5.9904]
        },
        {
          latLng: [52.4862, -8.9904]
        }
      ]
    };
  }
};
</script>
