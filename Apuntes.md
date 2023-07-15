//-- Clase 4

1-Configuramos un archivo donde indicamos que contenedores vamos a necesitar. 
Creamos el archivo docker-compose.yml


  Indicamos version

  Indicamos servicios (Es desde donde podemos conectarnos)


En image le indico la version del programa que quiero correr.
Creo las varables de entorno para obtener los datos que necesita el servicio.
Agrego el puerto.


 LUEGO DE ESTO, CORREMOS EN CONSOLA ======= >>>>>
            
            docker-compose up -d postres



OTROS COMANDOS PARA TRABAJAR CON DOCKER POR CONSOLA =====>>>>>

            docker-compose ps 
      Este comando sirve para ver que servicios esta corriendo



        docker-compose down / down postgres
      Comando para dejar de correr servicios



DATO DE VITAL IMPORTANCIA!

Los contenedores en Docker generalmente se consideran "stateless" o sin estado, lo que significa que no almacenan ni mantienen datos persistentes dentro de sí mismos. Los contenedores están diseñados para ser efímeros y reemplazables. Cada vez que se inicia un contenedor, se crea a partir de una imagen y contiene una instantánea del sistema de archivos y configuración definida en esa imagen.
Es necesario crear un "volumen" en el contenedor para que cada vez que cargue, levante estos datos almacenados y poder trabajar con la db.


Tambien cargue al final un volumes para indicar donde voy a persistir los datos!!


FIN DE CLASE

//--


//--

  CLASE NUMERO 5

  Cargamos un servicio nuevo a docker, pgadmin, que es una interfaz grafica para manipular postgresSQL. Nos queda entonces la opcion por consola o esta GUI. Cargamos el yml con los datos para poder usar la GUI, luego vimos los datos a traves de ciertos comandos, de la ip de donde corre el la base de datos, para luego cargar los datos en la GUI y poder generar las tabla donde vamos a cargar datos en la db.


  docker-compose exec postgres bash	 ---- >>  Conexion via terminal
  ls -l	---- >>  Ver todos los archivos
  psql -h localhost -d <POSTGRES_DB> -U <POSTGRES_USER>	---- >>  Conexion a Postgres
  \d+	---- >>  Estructura de la base de datos
  \q	---- >> Salir base de datos
  exit	---- >> Salir del contenedor
  docker-compose up -d pgadmin	---- >> Levantar servicio de pgadmin
  docker-ps	---- >> Tabla de servicios
  docker-inspect <id>	---- >> Detalle del contenedor









