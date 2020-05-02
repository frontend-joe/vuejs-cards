<template>
  <Card>
    <MapWrapper>
      <LMap :options="mapOptions" :zoom="zoom" :center="center">
        <LGeoJson
          :options="geojsonOptions"
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
  border-radius: 0.5rem;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
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

const MarkerPulse = styled(MarkerCircle)`
  position: absolute;
  top: 0;
  box-shadow: 0 0 0 15px #8362d0;
  animation: ${markerPulseAnimation} 1.75s ease-out infinite;
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
      mapOptions: {
        scrollWheelZoom: false,
        tap: false,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false
      },
      geojsonOptions: {
        style: {
          color: "#f3f3f3",
          weight: 1,
          fill: true,
          fillColor: "#dadada",
          fillOpacity: 1
        }
      },
      markers: [
        { latLng: [52.4862, 0.4904] },
        { latLng: [51.4862, 0.2904] },
        { latLng: [53.4862, -0.5904] },
        { latLng: [55.4862, -1.9904] },
        { latLng: [52.4862, -2.9904] },
        { latLng: [54.4862, -5.9904] },
        { latLng: [52.4862, -8.9904] }
      ]
    };
  }
};
</script>
