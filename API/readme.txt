Instrucciones para ejecutar las pruebas de API con Cypress
Este archivo puse los paso a paso para poder ejecutar las pruebas de API en el proyecto que prueba los endpoints signup y login de la API de DemoBlaze utilizando Cypress.

Requisitos:
Asegúrate de tener instalado lo siguiente:
1. Node.js: Necesitarás tener Node.js instalado en tu máquina para poder usar Cypress y otras dependencias del proyecto. Puedes descargar Node.js
2. Cypress: Vamos a usar Cypress para ejecutar las pruebas de API.

Pasos de instalación y ejecución
1. Clona el repositorioSi aún no has clonado el repositorio del proyecto, ejecuta el siguiente comando en tu terminal (reemplaza <url_del_repositorio> con la URL de tu repositorio en GitHub):git clone <url_del_repositorio>
cd <nombre_del_directorio>
Instala las dependenciasAbre una terminal y navega hasta el directorio donde se encuentra tu proyecto. Luego, ejecuta el siguiente comando para instalar todas las dependencias del proyecto, incluidas las necesarias para Cypress:npm install
Configuración de CypressUna vez que las dependencias estén instaladas, Cypress estará listo para ser configurado. Para abrir la interfaz de usuario de Cypress (lo cual te permitirá ejecutar las pruebas en el navegador), ejecuta el siguiente comando:npx cypress open 
Ejecuta las pruebas en la consola (Opcional)Si prefieres ejecutar las pruebas en la consola (sin abrir la interfaz gráfica de Cypress), puedes hacerlo con el siguiente comando:npx cypress run
Verifica los resultados de las pruebas
Si estás usando la interfaz gráfica de Cypress (npx cypress open), verás las pruebas en tiempo real y podrás navegar por los resultados.
Si ejecutaste las pruebas desde la consola (npx cypress run), los resultados se mostrarán directamente en la terminal. Además, los detalles de los errores o fallos se registrarán.
