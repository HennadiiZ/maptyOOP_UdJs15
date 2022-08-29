'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(

    (position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
    //   console.log(latitude, longitude);
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, latitude]

    // const map = L.map('map').setView([51.505, -0.09], 13);
    map = L.map('map').setView(coords, 13);
    console.log(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // L.marker([51.5, -0.09])
    // L.marker(coords)
    //     .addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();
      
      map.on('click', (mapE)=> {
        mapEvent = mapE;  
        form.classList.remove('hidden');
        inputDistance.focus();

        // console.log(mapEvent);

        // const {lat, lng} = mapEvent.latlng

        // // L.marker(coords)
        // L.marker([lat, lng])
        // .addTo(map)
        // // .bindPopup('works!')
        // .bindPopup(L.popup({
        //     maxWidth: '250px',
        //     minWidth: '100px',
        //     autoClose: false,
        //     closeOnClick: false,
        //     className: 'running-popup',
        // }))
        // .setPopupContent('works!')
        // .openPopup();
      })
    }, () => {
      alert('could not get your position');
    }
  );
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();
        console.log(mapEvent);

        const {lat, lng} = mapEvent.latlng

        // L.marker(coords)
        L.marker([lat, lng])
        .addTo(map)
        // .bindPopup('works!')
        .bindPopup(L.popup({
            maxWidth: '250px',
            minWidth: '100px',
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('works!')
        .openPopup();
})

//  Using the Geolocation API
// 233. Displaying a Map Using Leaflet Library
// 234. Displaying a Map Marker
// 235. Rendering Workout Input Form