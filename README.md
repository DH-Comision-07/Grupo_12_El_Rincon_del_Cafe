# Grupo_12_El_Rincon_del_Cafe ☕️

Somos una cadena de cafeterías especializada en la venta de cafés de selección de distintas partes del mundo, ofreciendo una experiencia única a los amantes del café.
Nos destacamos por la curada selección de granos de alta calidad, provenientes de reconocidas regiones cafetaleras como Colombia, Etiopía, Brasil, Jamaica y Costa Rica.
Los clientes pueden disfrutar de una variedad de perfiles de sabor, desde los suaves y afrutados hasta los intensos y especiados, cada uno representativo de su terroir específico.
El ambiente de la tienda es acogedor y culturalmente enriquecedor, decorado con elementos que evocan los diversos orígenes de sus productos.
También se ofrece venta en línea, proporcionando a los clientes la comodidad de recibir estos exclusivos cafés en su hogar.
El Rincón del Café no es solo un lugar para comprar café, sino un destino para los que desean explorar y disfrutar de la riqueza y diversidad del mundo del café.

## Equipo

- Emanuel Poncino
- Florencia Espósito
- Facundo Domé Lobo
- Alejandra Peréz
- Leandro Massola
- Nerea Haydee Arin
- Lautaro Salas Ane

## Links del proyecto integrador

- Trello: https://trello.com/invite/b/DKBxwQ35/ATTI9abd24599da338c92d116ea6254975bd889256C2/trabajo-final-programacion-grupo-12
- Figma: https://www.figma.com/file/9ZkdJYrOe3nJKVIC3GtkNk/Untitled?type=design&node-id=0-1&mode=design&t=cr0y0CK1wWlzdUeC-0

## Sitios de Referencia y por qué fueron elegidos:

- [The Coffe Store](https://www.thecoffeestore.com/): La barra superior y el carrusel.
- [Café Martinez](https://www.cafemartinez.com/): Nos gustó la sección de productos y carrito.
- [Bonafide Café](https://bonafidecafe.com.ar/producto/cafe-fluminense/): Los productos que ofrecen y el carrito.
- [The Italian Coffe Company](https://www.italiancoffee.com/): El video del home.
- [Tonino Lamborghini](https://lamborghini.it/pages/details-luxury-beverages): Las funcionalidades del front.

## Ejecucion:

Para la ejecucion del servidor se deben realizar los siguientes pasos.

- Crear una base de datos en la herramienta visual para trabajar base de datos que se tenga instalado en la computadora, para crear esta base de datos el codigo es el siguiente -create database elRincon_db;-
- Agregar un nuevo archivo en la carpeta raiz que se llame -.env- donde en el mismo debe tener las siguientes lineas de codigo:
    -     DB_USER= aqui debe estar el nombre de usuario del servicio de base de datos que se utilice, usualmente el nombre es root
    -     DB_PASSWORD= aqui debe estar el password de la conexion de la base de datos, esta password es personal, puede o no tenerla
    -     DB_NAME= aqui va el nombre de la base de datos, en este caso el nombre debe ser -elrincon_db-, sin excepcion
- Realizar un npm install para instalar todas las dependencias
- Correr en la consola el codigo -sequelize db:migrate- y luego -sequelize db:seed:all-
- Una vez realizada la migration de la base y las seeders ya esta listo para correr el servidor con -npm test-

