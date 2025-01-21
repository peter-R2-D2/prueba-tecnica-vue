<script setup>
import { computed, ref } from "vue";
import { GoogleMap, AdvancedMarker, Marker } from 'vue3-google-map'
import { useUserStore } from '../store/users';

const store = useUserStore()
const users = store.users
store.GET_USERS()

const markets = ref([])
// const transformedObject = computed(() =>
//   users.reduce((acc, item) => {
//     acc[item.id] = { positions: { ...item.address.geo }, label: "L", title: item.address.city };
//     return acc;
//   }, [])
// );

const center = { lat: 40.689247, lng: -74.044502 }
// const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }

</script>
 
<template>
  <div class="mt-5">
    <pre>{{ transformedObject }}</pre>
    <GoogleMap
    mapId="DEMO_MAP_ID"
    api-key="AIzaSyBFRaxR5FNpjvuM1I5gB-m4hxKqauqXjtk"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
    >
      <Marker v-for="market in transformedObject" :key="market.id" :options="market" :pin-options="pinOptions"/>
    </GoogleMap>
  </div>
</template>