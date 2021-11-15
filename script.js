mapboxgl.accessToken =
  "pk.eyJ1Ijoic2V5ZG8iLCJhIjoiY2t3MHY4NmtnMWcxYzJ2bGN1Y3o3YXpweCJ9.hKDOz_zH1I4rSF7NqTZSJg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
