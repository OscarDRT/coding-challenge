# coding-challenge
## Food Trucks

Se implemeta un servicio con login y registro para usuarios que requeren conocer las ubicaciones de camiones de comida segun sus gustos culinarios (coffee, tea, burger, etc).

It is implemented in the back-end nodejs with the following modules

[Food_Trucks/src/index.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/index.js)
|name|use|
|---|---|
|express|To raise the server and server settings|
|mongoose|ORM to manage between objects and database tables|
|passport|Manage authentication strategy|
|connect-flash|Send messages to the user regarding login and signup|
|morgan|View logs of our application|
|cookie-parser|Handling of server-side cookies|
|body-parser|Accessing the body of the user's requests|
|express-session|Stores session data on the server|

[Food_Trucks/src/app/models/user.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/app/models/user.js)

The registration and user authentication model is released
The password is encrypted and in case of a login it is compared with the one registered by the user

[Food_Trucks/src/app/routes.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/app/routes.js)

An API route model is created to capture the user's GET and POST requests
POST methods use "passport.authenticate" to validate data

[Food_Trucks/src/config/passport.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/config/passport.js)

It contains the authentication strategies and success or error messages, if it is required to add new authentication methods such as facebook, google in this section sets the strategies

[Hojas de estilo](https://github.com/OscarDRT/coding-challenge/tree/master/Food_Trucks/src/public/css)

CSS and bootstrap styles

[JS](https://github.com/OscarDRT/coding-challenge/tree/master/Food_Trucks/src/public/js)

[Class API:](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/API.js)

  - getData(): Requests the API with the data and converts it into JSON to return an array with this data

[APP](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/app.js)

listen to events, such as clicking on different buttons, or user input in the search bar

[class food_trucks](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/main.js)

  - contructor(): Initialize an object of the class
  - initializeMap(): Load the map (leaflet)
  - viewLocations(): Uses the API class instance to make the data request by the getData() method, then passes the response to displayMarker(listMarkers)
  - displayMarker(listMarkers): Adds a list of markers to a map layer
  - searchFood(search): Receives the user's search and together with the data it gets from the API sends it to filterByFood(response, search) to filter
  - filterByFood(places, search): Scans the list of data for matches with the user's search and returns this data in a new list, using displayMarker(Search) to add a layer with only the markers that match the search
  
[views](https://github.com/OscarDRT/coding-challenge/tree/master/Food_Trucks/src/views)
  
It contains the templates of the different views of the front-end
  
  
Instalacion 

nodejs
```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
$ source~/.bashrc
$ nvm install node --lts
$ node --version
$ npm --version
```
clone
```sh
$ git clone https://github.com/OscarDRT/coding-challenge.git
$ cd Food_Trucks/
$ npm install
```
ufw
```sh
$ sudo ufw enable
$ sudo ufw allow ssh
$ sudo ufw allow http
$ sudo ufw allow https
$ sudo ufw reload
```
Nginx
```sh
$ sudo apt install nginx
$ sudo service nginx start
$ mv food-trucks.me /etc/nginx/sites-available/
$ nginx -t 
$ ln -s /etc/nginx/sites-available/food-trucks.me /etc/nginx/sites-enabled/food-trucks.me
$ nginx -t
$ sudo service nginx restart
$ sudo service nginx status
```
pm2
```sh
$ npm install pm2 -g
$ pm2 --version
$ npm start  // Corre un script definido en package.json
$ pm2 startup
$ pm2 save
```
certbot
```sh
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt update
$ sudo apt-get install certbot python3-certbot-nginx
$ sudo certbot --nginx -d www.food-trucks.me -d food-trucks.me

$ cerbot renew --dry-run // to renew ssl
```

