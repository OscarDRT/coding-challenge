class food_trucks {

    constructor() {

        // Instance API
        this.api = new API();

        // create markers with the help of layerGroup
        this.markers = new L.LayerGroup();

        // initialize the map view
        this.map = this.initializeMap();
    }

    // loading leaflet map
    initializeMap() {
        // focus coordinates
        var map = L.map('map').setView([37.7525403, -122.4417211], 12);

        // map style
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        return map
    }

    viewLocations() {
        // function call that makes request to the API
        this.api.getData()
        .then(res => {
            const response = res.data

            // function call that draws all the food trucks
            this.displayMarker(response);
        })
    }

    //adds a marker layer with data it receives by parameter
    displayMarker(listMarkers) {
        // For debug
        console.log(listMarkers);

        //clears the current markers
        this.markers.clearLayers();
        
        // browse listMarkers containing the data of each food truck
        listMarkers.forEach(element => {
            //data destructuring 
            let {
                latitude,
                longitude,
                address, 
                applicant, 
                fooditems,
                locationdescription,
                dayshours
            } = element;
     
            // method to add information to the marker, own leaflet
            const popUp = L.popup()
                .setContent(`<p>Name: ${applicant}</p>
                             <p>Address: ${address}</p>
                             <p>${locationdescription}</p>
                             <p>${fooditems}</p>
                             <p>${dayshours}</p>
                `)

            // To change the default icon
            const MyIcon = L.icon({
                iconUrl: './food-truck.png',
                iconSize: [15, 15]
            });
            //the marker is created
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ], {icon: MyIcon}).bindPopup(popUp);
            // the marker is added to a layer
            this.markers.addLayer(marker);
        });
        //the marker layer is added to the map
        this.markers.addTo(this.map);
    }

    searchFood(search) {
        // function call that makes request to the API
        this.api.getData()
            .then(res => {
                let response = res.data;
                // data and user search are sent
                this.filterByFood(response, search);
            })
    }

    filterByFood(places, search) {
        if (places) {
            // search is standardized to accept combination of upper and lower case and find matches
            places.forEach(element => {
                if (element.fooditems) {
                    element.fooditems = element.fooditems.toLowerCase()
                }
            });
            //a new list is created with only the data that match the search
            const filterItem = places.filter( filterItem => {
                if (filterItem.fooditems) {
                    return filterItem.fooditems.indexOf(search) !== -1
                }
            });
            //function call that adds the markers
            this.displayMarker(filterItem);
        }
    }
}