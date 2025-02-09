Instrucciones para ejecutar las pruebas de E2E con Cypress
En este archivo proporcione instrucciones detalladas para ejecutar la prueba funcional automatizada (E2E) del flujo de compra en la página SauceDemo.

Requisitos:
Asegúrate de tener instalado lo siguiente:
1. Node.js: Necesitarás tener Node.js instalado en tu máquina para poder usar Cypress y otras dependencias del proyecto. Puedes descargar Node.js
2. Cypress: Vamos a usar Cypress para ejecutar las pruebas de E2E.

Pasos de instalación y ejecución
1.Clona el repositorioSi aún no has clonado el repositorio del proyecto, ejecuta el siguiente comando en tu terminal (https://github.com/guarandaholguin/Devsu_QA.git):git clone https://github.com/guarandaholguin/Devsu_QA.git
cd "nombre_del_directorio".
2.Instala las dependenciasAbre una terminal y navega hasta el directorio donde se encuentra tu proyecto. Luego, ejecuta el siguiente comando para instalar todas las dependencias del proyecto, incluidas las necesarias para Cypress:npm install
3.Configuración de CypressUna vez que las dependencias estén instaladas, Cypress estará listo para ser configurado. Para abrir la interfaz de usuario de Cypress (lo cual te permitirá ejecutar las pruebas en el navegador), ejecuta el siguiente comando:npx cypress open 
4.Ejecuta las pruebas en la consola: Si prefieres ejecutar las pruebas en la consola (sin abrir la interfaz gráfica de Cypress), puedes hacerlo con el siguiente comando:npx cypress run
5.Verifica los resultados de las pruebas
- Si estás usando la interfaz gráfica de Cypress (npx cypress open), verás las pruebas en tiempo real y podrás navegar por los resultados.
- Si ejecutaste las pruebas desde la consola (npx cypress run), los resultados se mostrarán directamente en la terminal. Además, los detalles de los errores o fallos se registrarán.
