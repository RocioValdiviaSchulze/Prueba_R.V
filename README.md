Paso 1: XAMPP
-Iniciar Apache y MySQL.
-Apretar "Admin" de MySQL que llevara a phpmyadmin.
-Crear base de datos
	+En este caso se llamara "pruebadb", siguiendo con la tabla que se 	llamara "datos" y tendrá dos columnas "Nombre", "Email".

Paso 2: Explorador de archivos
-Crear carpeta llamada "Prueba_R.V".
-Ingresar a la terminal de la carpeta y escribir...
	+npm init -y
	+npm install express mysql2 body-parser cors

Paso 3: VS Code
-Abrir la carpeta creada (que ya tendrá 2 archivos: package-lock.json y package.json).
-Crear archivo "server.js"
	+Explicar en pocas palabras
-Crear archivo "script.js"
	+Explicar
-Crear archivo "index.html"
	+Explicar
-Crear archivo "styles.css"
	+Explicar

Paso 4: VS Code + Carpeta + Navegador cualquiera
-Ingresar a la terminal de VS Code (con "Control" + "Ñ") y escribir...
	+node server.js (para iniciar el servidor).
-Ingresar a la carpeta "Prueba-R.V"
	+Doble click al archivo "index.html" y llevara al navegador 	seleccionado.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Flujo

+El archivo "index.html" sirve para hacer la estructura de la vista que tendrá usuario.

+El archivo "styles.css" sirve para diseñar la estructura.

+El script sirve para ver la lógica (capturar, validar) y como un puente entre el frontend (lo que ve el usuario, específicamente el HTML) para que los datos que ingrese el usuario, lleguen a la base de datos.

+El archivo "server.js" sirve para hacer la conexión con la base de datos 


HTML -> Script -> Server -> Base de datos
