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
