$(document).ready(function(){

    function initMap() {
    console.log("cmon yo")
      var mymap = L.map('mapid').setView([29.79, -98.42], 13);
  
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaG9odXNlcjEyMyIsImEiOiJja25ldHM1Y2YwMHl0MnhwYTFjcmhrMjd1In0.oWaWYfJfKI3HsQrmx-huDA'
      }).addTo(mymap);
  
      var marker = L.marker([29.79, -98.42]).addTo(mymap);
      marker.bindPopup("Centro Armonium -Villamarchante - Valencia").openPopup();
    }
    
    initMap()

  });