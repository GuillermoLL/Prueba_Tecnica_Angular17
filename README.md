
# Angular 17

Este proyecto esta utilizando la versión de Angular 17.3.8

## Lanzar el proyecto
  
**Con Docker**

En el repositorio vienen el archivo Dockerfile y el docker-compose.yml.

Dirígete la carpeta donde clonaste el repositorio y ejecuta:
  
```console
docker-compose up
```
Se montara la imagen y el contenedor de la app. 
Una vez que termine de instalar dirígete a <http://localhost:4200> para revisar la app.
  
**En local**

Primero asegúrate de que estas en la versión de node 18.17.0

Después, instala todas las dependencias.

```console
npm install --force
```

Y lanza el proyecto.

```console
npm run start
```
Puedes revisar la app en <http://localhost:4200>
  
## Descripcion de la prueba

El objetivo de esta prueba, es desarrollar una pequeña aplicación web, usando Angular, que permita las operaciones básicas (CRUD) sobre los datos obtenidos desde una API REST (https://reqres.in/, en la web tienes acceso a toda la documentación, swagger…etc).  

## Requisitos

- El código de la prueba debe realizarse usando Angular.
- Puedes usar cualquier entorno de desarrollo, así como cualquier herramienta, plugin o librería adicional que consideres, pero por favor, indícanos cuáles has utilizado si no se ve claramente en el código.
- El código debe entregarse en un repositorio accesible por duacode (GitHub, Gitlab, Bitbucket…etc), y además debes facilitarnos las instrucciones para la instalación, compilación y ejecución del mismo.  

## Librerias extra

- Ts-standar: Para lintar el codigo y no tener errores al escribir.
- Tailwind: Para crear los diseños de interfaces.
- Postcss: Para poder instalar y configurar Tailwind en Angular.
