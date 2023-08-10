//-- Clase 4

1-Configuramos un archivo donde indicamos que contenedores vamos a necesitar. 
Creamos el archivo docker-compose.yml


  Indicamos version

  Indicamos servicios (Es desde donde podemos conectarnos)


En image le indico la version del programa que quiero correr.
Creo las varables de entorno para obtener los datos que necesita el servicio.
Agrego el puerto.


 LUEGO DE ESTO, CORREMOS EN CONSOLA ======= >>>>>
            
            docker-compose up -d postgres



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

 CLASE NUMERO 5

  Cargamos un servicio nuevo a docker, pgadmin, que es una interfaz grafica para manipular postgresSQL. Nos queda entonces la opcion por consola o esta GUI. Cargamos el yml con los datos para poder usar la GUI, luego vimos los datos a traves de ciertos comandos, de la ip de donde corre el la base de datos, para luego cargar los datos en la GUI y poder generar las tabla donde vamos a cargar datos en la db.


  docker-compose exec postgres bash	 ---- >>  Conexion a la db del contenedor via terminal
  ls -l	---- >>  Ver todos los archivos
  psql -h localhost -d <POSTGRES_DB> -U <POSTGRES_USER>	---- >>  Conexion a Postgres
  \d+	---- >>  Estructura de la base de datos
  \q	---- >> Salir base de datos
  exit	---- >> Salir del contenedor
  docker-compose up -d pgadmin	---- >> Levantar servicio de pgadmin
  docker ps	---- >> Tabla de servicios
  docker inspect <id>	---- >> Detalle del contenedor




//--
  Datos en Sequelize y su funcionamiento :
  La diferencia principal entre `init` y `sync` en Sequelize es su propósito y función.

1. `init`:
   - `init` es un método utilizado para inicializar los modelos en Sequelize.
   - Cuando defines un modelo utilizando la clase `Model` de Sequelize, es necesario inicializarlo antes de poder usarlo en tu aplicación.
   - La inicialización configura el modelo con su esquema, relaciones y otras configuraciones.
   - El método `init` se llama generalmente dentro de un archivo donde defines tus modelos y configuraciones.

2. `sync`:
   - `sync` es un método utilizado para sincronizar los modelos definidos con la base de datos.
   - Cuando llamas al método `sequelize.sync()`, Sequelize inspeccionará los modelos definidos y creará o actualizará automáticamente las tablas en la base de datos para que coincidan con la definición de los modelos.
   - Si una tabla no existe, Sequelize la creará. Si ya existe, Sequelize actualizará la estructura para que coincida con el modelo.
   - Es importante tener en cuenta que `sync` debe utilizarse con precaución en entornos de producción, ya que puede realizar cambios en la base de datos y potencialmente eliminar datos existentes si los modelos se modifican de manera incorrecta.

En resumen, `init` se utiliza para configurar los modelos, mientras que `sync` se utiliza para asegurarse de que la estructura de la base de datos coincida con la definición de los modelos. Ambos son pasos importantes al trabajar con Sequelize, y su orden de uso generalmente es primero la inicialización de los modelos y luego la sincronización con la base de datos. Sin embargo, es importante tener en cuenta que el uso de `sync` puede ser riesgoso en producción, por lo que es recomendable utilizar migraciones controladas para realizar cambios en la base de datos en entornos de producción.

//--





//-- Clase numero 6
Agregamos mas caracteristicas a nuestra app, manejando clean architecture.
====>> Capa de controladores, donde recibimos el request
====>> Servicios, que se encargan de la logica de negocio
====>> Lib, donde gestionamos la conexion a terceros.

Agrego que también usamos los routes (manejo de rutas), los middlewares, funciones donde podemos manipular los datos antes de que sean enviados a destino.





//-- Clase 7
Manejando un Pool de conexiones

Hay un problema con getConnection. El problema es que cada vez que llamamos a getConnection, lo que hacemos internamente en el codigo es llamar y llamar y llamar, es decir hacer request continuamentes, eso esta mal porque puede sobrecargar el servidor de request.


En el contexto de la informática, el término "pool" se utiliza para referirse a un grupo o conjunto de recursos que se comparten y se administran de manera conjunta. Estos recursos pueden ser de diferentes tipos, como conexiones de bases de datos, hilos de ejecución, conexiones de red, memoria, entre otros.

Un "pool" se crea para optimizar el uso de recursos y evitar su agotamiento o uso ineficiente. En lugar de crear y cerrar recursos individualmente cada vez que se necesitan, se establece un grupo de recursos preexistentes que están disponibles para su uso inmediato. Cuando un componente o aplicación necesita un recurso, lo solicita al pool y cuando ha terminado de usarlo, lo devuelve al pool en lugar de liberarlo completamente.

Un ejemplo común es el "connection pool" o "pool de conexiones" en el ámbito de las bases de datos. En lugar de abrir y cerrar una conexión a la base de datos cada vez que se necesita realizar una operación, se mantiene un conjunto de conexiones abiertas y listas para su uso. Cuando una parte del programa necesita una conexión, la obtiene del pool, la utiliza y luego la devuelve al pool para que pueda ser reutilizada por otras partes del programa.

El uso de pools puede mejorar el rendimiento y la eficiencia de una aplicación al reducir el tiempo de creación y destrucción de recursos. También ayuda a controlar y limitar el número de recursos utilizados simultáneamente, evitando situaciones de sobrecarga o agotamiento.

Es importante tener en cuenta que la gestión adecuada de un pool de recursos es crucial para garantizar su correcto funcionamiento. Esto incluye monitorear y ajustar el tamaño del pool según la demanda, manejar adecuadamente los recursos cuando se produce un fallo o una excepción, y asegurarse de que los recursos se devuelvan al pool cuando ya no se necesitan para evitar fugas de recursos.



//-- Clase numero 8 - Variables de ambiente en Node.js

  Es una mala práctica poner en el código los datos sensibles como son, datos de usuario, contraseñas, puertos, etc.
  Para ello, usamos variables de entorno las cuales serán inyectadas a nuestro ambiente de trabajo (sea producción o desarrollo). Así, trabajaremos de manera más segura.

  Con process leemos variables de entorno en NodeJs.
  No enviamos variable por variable, sino que protegemos estos datos y enviamos una URL con todo esta cadena de datos.
  Debemos crear un archivo de variables de entorno. Estas tienen una extension .env
  Añadimos una libreria que lee los datos del archivo .env y los carga automaticamente en nuestras variables de ambiente. Se llama dotenv.




//-- Clase numero 9 - ¿Qué es un ORM? Instalación y configuración de Sequelize ORM


Un ORM (Object-Relational Mapping) en programación es una técnica que permite interactuar con una base de datos relacional utilizando objetos y clases en lugar de trabajar directamente con consultas SQL. En esencia, un ORM actúa como una capa de abstracción que mapea las tablas de la base de datos a clases en el lenguaje de programación utilizado.

La idea detrás de un ORM es simplificar y agilizar el desarrollo de aplicaciones al permitir a los desarrolladores utilizar el paradigma de programación orientado a objetos en lugar de tener que preocuparse por detalles específicos del sistema de gestión de bases de datos (DBMS) subyacente.

Algunas de las principales funcionalidades que un ORM proporciona son:

1. Mapeo de objetos a tablas: El ORM permite definir clases que representan tablas en la base de datos. Cada instancia de una clase representa una fila en la tabla y las propiedades de la clase corresponden a las columnas de la tabla.

2. Abstracción de consultas: El ORM permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre la base de datos utilizando métodos y funciones de las clases en lugar de escribir directamente consultas SQL.

3. Relaciones y asociaciones: Los ORMs facilitan el manejo de relaciones complejas entre tablas, como relaciones uno a uno, uno a muchos o muchos a muchos, permitiendo navegar por las relaciones entre objetos.

4. Optimización de consultas: Los ORMs pueden optimizar las consultas generadas para mejorar el rendimiento y evitar problemas comunes como las consultas N+1.

5. Independencia del DBMS: Un buen ORM puede ser compatible con múltiples sistemas de gestión de bases de datos, lo que permite cambiar el DBMS subyacente sin tener que modificar significativamente el código de la aplicación.

Ejemplos populares de ORMs incluyen SQLAlchemy para Python, Hibernate para Java, Entity Framework para .NET, y Django ORM para el framework de desarrollo web Django de Python, entre otros. El uso de un ORM puede ahorrar tiempo y reducir la cantidad de código necesario para interactuar con la base de datos, lo que hace que el desarrollo de aplicaciones sea más rápido y eficiente.

Utilizamos en el curso sequelize, una dependencia super potente, agnóstica.
Gestionamos esta dependencia desde la capa de librerias.


Para poder usar el sequelize como enlace a la base de datos, para poder hacer las consultas,
ejemplo "const rta = await models.User.findAll();", el models lo importo con destructuración de objetos, llamando a sequelize, su configuración hacia el servidor ("sequelize.js").
const { models } = require('../lib/sequelize'); Entonces con models hacemos las peticiones usando esos metodos automaticamente. ahhh ...un elissír...

//--




// --
Clase 10 - Tu primer modelo en Sequelize
Está ampliado en los apuntes de notion el desarrollo. Pero básicamente se estructura así el desarrollo de Sequelize:
  1- Configuración de la conexión con la base de datos.
  2- Definir el modelo y el esquema.
  3- Sincronización con la base de datos.




//--
Clase numero 12 - Cambiando la base de datos a MySQL


  1- Instale contenedores de MySql y de PhpMyAdmin
  2- Hice los cambios en la sintaxis de db. Ahora es mysql y no postgres.

//--



//--
Clase numero 13 - ¿Qué son las migraciones? Migraciones en Sequelize ORM
Las migraciones son un sistema de control de versiones en los cambios que se realizan en las bases de datos.

Las migraciones con sequelize se hacen gracias a sync(). Se leen los modelos y empieza a crear tablas. Sin embargo no se aconseja para correrlo en produccion. 

1- Instale el cli de sequelize
2- cree archivo sequelizerc 
  El archivo .sequelizerc es un archivo de configuración opcional que se utiliza en proyectos que utilizan Sequelize. Su objetivo principal es permitirte personalizar la ubicación de los directorios y archivos utilizados por Sequelize en tu proyecto.

3- Cree el archivo de configuracion de las migraciones config.js
4- Cree carpetas - migrations, seeders.


//--
Clase 14 - Configurando y corriendo migraciones con npm scripts

Configuramos scripts para correr migraciones.


//--

//--
Clase 15 - El profesor indica un dato importante. Con sync no se pueden generar modificaciones a una tabla que ya esta creada. A diferencia de las migraciones, donde si es posible hacer este tipo de modificaciones.

//--


//-- Clase numero 16 - Relaciones uno a uno


//-- 
Clase 17 Resolviendo las relaciones uno a uno

  La ide de esta clase es poder realizar creaciones en la tabla de customers y que de manera automatica, se creen tambien usuarios. Esto seria vinculando la foreign key con la primary key.
  Tambien sera parte de esta clase, la forma en que se muestra la informacion en los endpoints.
  Usando el include en el service de customers se resuelve el get completo de customers + users.

  Como logro que tambien ocurra cuando hago una busqueda desde users y me muestra los customers vinculados?
    En user.models, configuro el objeto class User extends models y hago un hasOne.
    Luego cargo esta configuracion en el index de los modelos
    Luego le indico al schema de usuarios que cuando haga un findAll, tambien cargue esta a customers desde la asociacion previamente hecha.
    

  Vamos a crear de una vez, al usuario por medio del POST de Customers
    Modifico mi customer.schema para indicarle que ahora al momento de crear un customer nuevo, debo cargar datos del user nuevo tambien.
    sequelize automaticamente sabe que hay un enlace con las keys, por eso en el service de customer, al momento de crear un customer nuevo, le indico que incluya el users si es que viene en los datos que envia el cliente.

//--


//-- 
Clase 18 - Relaciones uno a muchos





//--
