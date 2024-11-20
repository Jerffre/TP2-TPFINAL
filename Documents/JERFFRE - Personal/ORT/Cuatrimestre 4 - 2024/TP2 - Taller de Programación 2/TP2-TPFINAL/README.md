# Node.js API RESTful: Gestión de Productos

Este proyecto es una API RESTful desarrollada en Node.js y Sequelize que permite gestionar **Productos**. Implementa relaciones entre **Roles** y **Usuarios**, asegurando una arquitectura escalable y clara.

---

## Funcionalidades principales

### Usuarios
- Crear usuarios con contraseña encriptada.
- Consultar usuarios por ID o listar todos los usuarios.
- Actualizar información del usuario.
- Eliminar usuarios.

### Roles
- Crear nuevos roles.
- Consultar roles por ID o listar todos los roles.
- Eliminar roles.

### Productos
- Crear productos asociados a un creador (usuario).
- Consultar productos por ID o listar todos los productos.
- Actualizar información del producto.
- Eliminar productos.

## Instalación y Configuración

- git clone <https://github.com/Jerffre/TP2-TPFINAL.git>
- Instalar dependencias: npm install
- Configurar la base de datos: Crear un archivo en connection/connection.js con los detalles de tu base de datos. Nosotros utilizamos SQL SERVER MANAGMENT STUDIO y principalmente nos guiamos con el video nombrado debajo. Esto claramente se puede reemplazar por su gestor de base de datos de preferencia pero con la salvedad de modificar el archivo connection.js y verificar justamente algun video, pagina, etc que explique como dar la configuracion pertinente.

Video Configuracion SQL SERVER: https://www.youtube.com/watch?v=uDS6c6DZyY4 

## Tecnologías utilizadas
- Node.js: Entorno de ejecución.
- Express: Framework para la creación de servidores web.
- Sequelize: ORM para manejar la base de datos.
- SQL Server: Base de datos relacional.

## Próximos pasos

- Conseguir clientes que adopten nuestro aplicativo en su gestion de deposito para lograr fondos de inversion.
- Con esos fondos hacer un deploy de la base de datos para de esta manera salir de un estado local y lograr trabajar a distancia.
- Una vez logrado lo anterior, expandir roles, usuarios y nuevos rubros de acuerdo a las solicitudes del cliente y adaptar la logica previamente definida.
- Optimizar las consultas a la base de datos, utilizando índices y técnicas avanzadas de Sequelize. Explorar alternativas a esto ultimo. Que logren resultados similares pero con otra sintaxis.

## package.json 
--> Scripts --> dev: es el de desarrollo (el nuestro, por eso tiene el watch para ir viendo que pasa en el la termina). Es el que va a tener que usar el profesor. Seria "npm run dev" en la terminal.

--> Scripts --> start: es el que se usaria para hacer el deploy. Subirlo a algun lado, servidor, lo que sea para que se pueda correr por fuera de la terminal. (ESTE NO LO VAMOS A USAR.)
