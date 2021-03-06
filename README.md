# Challenge Mercado Libre

  

_El siguiente proyecto corresponde a un challenge de frontend por parte de mercadolibre.com_

  

_Dicho proyecto est谩 construido bajo tecnolog铆as de Javascript (NodeJS, ReactJS)_

  

Para acceder a la instancia actual de este proyecto, se debe ir a la siguiente URL: [**Challenge Mercado Libre**](https://mercado-libre-challenge.herokuapp.com/)

  

## Comenzando 馃殌

  

_Este proyecto est谩 alojado en la siguiente URL: https://github.com/davidra24/Prueba-Meli, desde d贸nde se deber谩 clonar el repositorio para trabajar de manera local el desarrollo._

  

Mira **Despliegue** para conocer como desplegar el proyecto.

  
  

### Pre-requisitos 馃搵

  

_Antes de empezar se debe contar con los siguientes requisitos_

  

```

- NodeJS v14.15.1

- npm v6.14.8

```

  

### Instalaci贸n 馃敡

  

_Para la instalaci贸n de dependencias necesarias se deben ejecutar los siguientes comandos:_

  

```

npm install o yarn

```

  

_Seguido de esto es necesario crear el archivo **.env**, para poder trabajar bajo el entorno de desarrollo, o generar los archivos de producci贸n_

  

En el archivo debe ir la siguiente informaci贸n

  

#### Para Desarrollo

```

ENV=development

PORT=5000

```

#### Para Producci贸n

```

ENV=production

PORT=5000

```

## Ejecuci贸n馃捇

  

#### Entorno de desarrollo

_Una vez instaladas las dependencias y configuradas las variables de entorno, procedemos a la ejecuci贸n, para ejecutar en un ambiente de desarrollo procedemos a utilizar el siguiente comando_

```

npm run dev o yarn dev

```

_El cu谩l ejecutar谩 tanto el backend como el frontend, por medio de webpack_

  

#### Entorno de producci贸n

_Una vez instaladas las dependencias y configuradas las variables de entorno, procedemos a la ejecuci贸n, para ejecutar en un ambiente de producci贸n, procedemos a crear el build correspondiente a este entorno, para esto utilizaremos el siguiente comando_

```

npm run build o yarn build

```

_Seguido de esto se generar谩 una carpeta en la ruta src/server/public, la cu谩l estar谩 disponible para hacer renderizado desde el servidor en modo de producci贸n, una vez generada esta carpeta procedemos a utilizar el siguiente comando_

```

npm start o yarn start

```

_El cu谩l ejecutar谩 tanto el backend como el frontend, por medio de webpack_

  

Una vez ejecutado cualquiera de los dos entornos, podremos empezar a utilizar el proyecto, el cu谩l para acceder se deber谩 entrar a la URL:

  

> http://localhost:5000

  

Para acceder al backend, podremos observar la documentaci贸n como est谩 funcionando en la siguiente URL:

  

> http://localhost:5000/api

  

## Ejecutando las pruebas 鈿欙笍

  

_Para realizar pruebas unitarias, con Jest, utilizaremos el siguiente comando_

```

npm run test o yarn test

```

_Si queremos dejar que jest use una instancia contin煤a y realice pruebas en tiempo real, debemos ejecutar el siguiente comando_

```

npm run test:watch o yarn test:watch

```

_Si deseamos analizar la cobertura de nuestras pruebas, debemos ejecutar el siguiente comando, que nos generar谩 una nueva carpeta que nos mostrar谩 la cobertura en cada archivo de js que estemos utilizando_

```

npm run test:coverage o yarn test:coverage

```

  

## Despliegue 馃摝

  

_Para realizar el despliegue, se est谩 utilizando Travis CI, como herramienta de integraci贸n y despliegue continuo, por esto mismo, para realizar un despliegue se debe realizar la actualizaci贸n de la rama master, ya sea por medio de un push o por un pull request._

  

_Seguido de esto se deber谩 acceder al dashboard de travis, donde se aloja la integraci贸n del proyecto, donde se podr谩 observar el procesos del build, travis se encargar谩 de todo el proceso de despliegue de forma autom谩tica, para conocer el estado de despliegue se puede consultar la siguiente URL:_

> [Despliegue Travis CI](https://travis-ci.com/github/davidra24/Prueba-Meli)

_Una vez terminado el despliegue por parte de travis se puede revisar el despliegue en esta url:_

  

> https://mercado-libre-challenge.herokuapp.com/

  

_De igual forma, podremos acceder a la documentaci贸n del backend en esta url:_

  

> https://mercado-libre-challenge.herokuapp.com/api

  

## Construido con 馃洜锔?

  

_Para realizar este proyecto se utilizaron las siguientes herramientas_

  

*  [NodeJS](https://nodejs.org/en/docs) - Es un entorno en tiempo de ejecuci贸n multiplataforma, de c贸digo abierto, para la capa del servidor basado en JavaScript.

*  [ReactJS](https://es.reactjs.org/docs/getting-started.html) - Es una biblioteca Javascript de c贸digo abierto dise帽ada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola p谩gina.

*  [ExpressJS](https://expressjs.com/en/guide/routing.html) - Es un marco de aplicaci贸n web de back-end para Node.js.

*  [Webpack](https://webpack.js.org/concepts) - Es un paquete de m贸dulos de JavaScript de c贸digo abierto, dise帽ado para empaquetar aplicaciones web complejas.

*  [Sass](https://sass-lang.com/documentation) - Es un preprocesador de lenguaje de hoja de estilos en cascada (CSS).

*  [Jest](https://jestjs.io/docs/getting-started) - Es un marco de prueba de JavaScript.

*  [TravisCI](https://docs.travis-ci.com) - Es un servicio de integraci贸n continua alojado que se utiliza para crear y probar proyectos de software alojados en GitHub y Bitbucket.

## Autores 鉁掞笍

*  **Carlos David Ram铆rez G贸mez** - *Totalidad del proyecto* - [davidra24](https://github.com/davidra24)

  
## Licencia 馃搫

Este proyecto est谩 bajo la Licencia (MIT) - mira el archivo [LICENSE.txt](https://github.com/davidra24/Prueba-Meli/blob/master/LICENSE.txt) para detalles


## Pruebas de calidad

_De igual forma, se utiliz贸 la herramienta lighthouse de google para realizar pruebas en el challenge, el cu谩l tiene en cuenta temas como:_

- Rendimiento
- Accesibilidad
- Buenas practicas
- SEO
- PWA


_EL resultado de dichas pruebas se puede encontrar en la siguiente URL:_
[Prueba de calidad del sitio](https://davidra24.github.io/performance-test-challenge/)

---

鈱笍 Hecho con 鉂わ笍 por [davidra24](https://github.com/davidra24/Prueba-Meli) 馃槂