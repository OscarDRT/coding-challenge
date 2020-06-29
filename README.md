# coding-challenge
## Food Trucks

Se implemeta un servicio con login y registro para usuarios que requeren conocer las ubicaciones de camiones de comida segun sus gustos culinarios (coffee, tea, burger, etc).

Se implementa en el back-end nodejs con los siguentes modulos.

|nombre|uso|
|---|---|
|express|Para levantar el servidor y configuraciones del mismo|
|mongoose|ORM para gestionar enntre los objetos y las tablas de la base de datos|
|passport|Manejar estrategia de autenticacion|
|connect-flash|Enviar mensajes al usuario respecto al login o registro|
|morgan|Vista de logs de nuestra aplicacion|
|cookie-parser|Manejo de cookies del lado del servidor|
|body-parser|Acceder al cuerpo de las peticiones del usuario|
|express-session|Almacena los datos de sesion en el servidor|

[Food_Trucks/src/app/models/user.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/app/models/user.js)

Se estrablace el modelo de registro y autenticacion de usario
Se sifra la contraseña y en caso de ser un login se compara con la registrada por el usuario

[Food_Trucks/src/app/routes.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/app/routes.js)

Se crea un modelo de rutas API que permite capturar las peticiones GET y POST del usuario
Los metodos POST hacen uso de "passport.authenticate" para validar los datos

[Food_Trucks/src/config/passport.js](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/config/passport.js)
Contiene las estrategias de auntenticacion y los mensajes de exito o error, si se requere agragar nuevos metodos de autenticacion como facebook, google en esta seccion se estableces las estrategias

sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v14.4.0/bin /home/ubuntu/.nvm/versions/node/v14.4.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

[Hojas de estilo](https://github.com/OscarDRT/coding-challenge/tree/master/Food_Trucks/src/public/css)

CSS y estilos de bootstrap

---
[JS](https://github.com/OscarDRT/coding-challenge/tree/master/Food_Trucks/src/public/js)

[Class API:](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/API.js)

  - getData(): Realiza peticion a la API con la data y la convierte en JSON para retornar un arreglo con estos datos 

[APP](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/app.js)

  - Esta pendiente a los enventos, como el click a los diferentes botones, o el input por el usuario en la barra de busqueda

[class food_trucks](https://github.com/OscarDRT/coding-challenge/blob/master/Food_Trucks/src/public/js/main.js)

  - contructor(): Inicializar un objeto de la clase
  - initializeMap(): Carga el mapa (leaflet)
  - viewLocations(): Usa la instancia de la clase API para realizar la peticion de los datos por medios del metodo getData(), luego pasa la respuesta a     displayMarker(listMarkers)
  - displayMarker(listMarkers): Agrega una lista de marcadores a una capa del mapa
  - searchFood(search): Recibe la busqueda del usuario y junto con los datos que obtiene de la API se los envia a filterByFood(response, search) para filtar
  - filterByFood(places, search): Hace un recorrido de la lista de datos buscando coincidencias con la busqueda del usuario y retornando estos datos en una nueva lista, se usa displayMarker(Search) para agregar una capa solo con los marcadores que coinciden con la busqueda
  
