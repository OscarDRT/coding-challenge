class food_trucks {

    constructor() {

        // Instance API
        this.api = new API();

        // create markers with the help of layerGroup
        this.markers = new L.LayerGroup();

        // initialize the map view
        this.map = this.initializeMap();
    }

    initializeMap() {
        var map = L.map('map').setView([37.7576793, -122.5076411], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        return map
    }

    viewLocations() {
        this.api.getData()
        .then(res => {
            const response = res.data

            // function call that draws all the food trucks
            this.displayMarker(response);
        })
    }

    displayMarker(listMarkers) {
        // For debug
        console.log(listMarkers);

        this.markers.clearLayers();
        
        listMarkers.forEach(element => {
            let {
                latitude,
                longitude,
                address, 
                applicant, 
                fooditems,
                locationdescription,
                dayshours
            } = element;
     

            const popUp = L.popup()
                .setContent(`<p>Name: ${applicant}</p>
                             <p>Address: ${address}</p>
                             <p>${locationdescription}</p>
                             <p>${fooditems}</p>
                             <p>${dayshours}</p>
                `)

            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(popUp);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.map);
    }

    searchFood(search) {
        this.api.getData()
            .then(res => {
                let response = res.data;
                this.filterByFood(response, search);
            })
    }

    filterByFood(places, search) {
        if (places) {

            places.forEach(element => {
                if (element.fooditems) {
                    element.fooditems = element.fooditems.toLowerCase()
                }
            });
            
            const filterItem = places.filter( filterItem => {
                if (filterItem.fooditems) {
                    return filterItem.fooditems.indexOf(search) !== -1
                }
            });
            this.displayMarker(filterItem);
        }
    }
}