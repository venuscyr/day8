var map = L.map('map').setView([48.8566, 2.3522], 6);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var epitechIcon = L.icon({
    iconUrl: 'logoepitech.png',  
    iconSize: [38, 38],          
    iconAnchor: [19, 38],        
    popupAnchor: [0, -34]        
});


var schools = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Bordeaux", coords: [44.8378, -0.5792] },
    { name: "Lille", coords: [50.6292, 3.0573] },
    { name: "Lyon", coords: [45.7640, 4.8357] },
    { name: "Marseille", coords: [43.2965, 5.3698] },
    { name: "Toulouse", coords: [43.6047, 1.4442] },
    { name: "Nantes", coords: [47.2184, -1.5536] },
    { name: "Nice", coords: [43.7102, 7.2620] }
];
schools.forEach(function(school) {
    L.marker(school.coords, { icon: epitechIcon })
        .addTo(map)
        .bindPopup(school.name + " rocks!");
});
