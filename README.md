# proyecto_daniel_backend
proyecto final para el curso de desarrollador web full stack de TalentoTech

# Tecnologías
- Node.js
- Express
- PostgresSQL
- Vercel (para despliegue, si aplica)

## Instalación
1. Clona este repositorio:

    git clone https://github.com/daroalge/proyecto_daniel_backend.git

2. Instala las dependencias:

    npm install

3. Configura las variables de entorno necesarias. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

    # Port of express
PORT = 3000

#DB Connection Config Dev
DB_DEV_HOST = localhost
DB_DEV_USER = tu_usuario
DB_DEV_PASSWORD = tu_contraseña
DB_DEV_NAME = ...
DB_DEV_PORT =...

#Clave JWT
CLAVE_JWT = ...

#Producción
PRODUCTION=..


4. Inicia el servidor:

    npm start

# Uso
Para utilizar este backend, debes enviar peticiones a los siguientes endpoints:

- `POST /api/login`: Inicia sesión de un usuario.
- `POST /user/register`: Registra un nuevo usuario.
- `GET /product/list`: Muestra la lista de productos.
- `GET /products/list/:id`: Muestra el producto por id específico.
- `POST /products/list/createProducts`: Crea un nuevo producto.
- `DELETE /products/list/deleteProducts/:id`: Elimina un producto a través del id.
- `PUT /products/list/updateProducts/:id`: Actualiza un producto a través del id.

Ejemplo de petición para obtener la lista de usuarios:

POST http://localhost:3000/api/login

# Contribuciones
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios (git checkout -b feature/nueva-funcionalidad).
3. Haz commit de tus cambios (git commit -m 'Añadir nueva funcionalidad').
4. Sube tus cambios a GitHub (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.