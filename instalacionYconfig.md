## Instalación y configuración

1. Crear un nuevo proyecto en Vite:

```npm create vite@latest```

2. Instalar las dependencias:

``` npm install```

3. Instalar dependencias adicionales:

``` npm install @emotion/react @emotion/styled @fontsource/alumni-sans @mui/icons-material @mui/lab @mui/material firebase formik react-icons react-loader-spinner react-modal react-router-dom sass sweetalert2 yup```

[Dependencias adicionales](/package.json)

4. Implementación de API de Marvel:

Debe darse de alte y crear una cuenta en la api para obtener las key publica y privada. 

Crear el hash md5 en un autogenerador de hash:
"1clave_privadaClave_publica".

Crear los componentes y páginas según se desarrolle la app y hacer las llamadas a la API según que información queremos mostrar.

[Ejemplo de llamada a API](/src/pages/Inicio.jsx)

5. Crear el archivo de configuración de firebase:

[Configuración de Firebase](/src/config/Firebase.jsx)

Y el contexto de usuario:

[Contexto](/src/context/UserContext.jsx)

6. Define el enrutamiento de la aplicación:

[Router](/src/router/index.jsx)

7. Define las páginas privadas y públicas

[Layout private](/src/layouts/LayoutPrivate.jsx)

[Layout publica](/src/layouts/LayoutPublic.jsx)

8. Puedes ir probando la app en tiempo real sin necesidad de despliegue con este comando:

```  npm run dev ```