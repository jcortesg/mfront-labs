# Microfrontends Application

Este proyecto es una aplicación compuesta por múltiples microfrontends, cada uno encargado de una funcionalidad específica (tareas, usuarios, reportes). La aplicación utiliza React y se gestiona a través de Docker para facilitar su despliegue y ejecución.

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas en tu máquina antes de comenzar:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

├── tasks/ 
├── users/ 
├── reports/ 
├── container/ 
├── docker-compose.yml 
└── README.md

- **tasks/**: Microfrontend para la gestión de tareas.
- **users/**: Microfrontend para la gestión de usuarios.
- **reports/**: Microfrontend para la generación de reportes.
- **container/**: Contenedor principal que sirve de punto de entrada y orquesta los microfrontends.
- **docker-compose.yml**: Archivo de configuración para Docker Compose.

## Configuración Inicial

1. Clona el repositorio en tu máquina local
2. Construye y levanta los contenedores: docker-compose up --build
3. La aplicación estará disponible en http://localhost:3000.

