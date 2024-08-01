#### Caso de uso:

¿Qué es el tipado estático y por qué es importante en TypeScript?

El tipado estático es la capacidad de definir tipos de datos para variables, parámetros de funciones y valores de retorno. En proyectos a gran escala, el tipado estático de TypeScript beneficia a los equipos de desarrollo de la siguiente manera:

- **Prevención de errores**: Los tipos estáticos ayudan a detectar errores en tiempo de compilación.
- **Mejor documentación**: Los tipos claros y explícitos sirven como documentación del código.
- **Mejor rendimiento**: TypeScript puede optimizar el código basado en los tipos definidos.
- **Mejor mantenibilidad**: Los tipos estáticos facilitan la refactorización y el mantenimiento del código.
- **Mejor autocompletado**: Los editores de código pueden proporcionar sugerencias y autocompletado basados en los tipos.
- **Mejor legibilidad**: Los tipos explícitos hacen que el código sea más fácil de entender para otros desarrolladores.
- **Mejor escalabilidad**: Los tipos estáticos permiten escalar el código de manera más eficiente.
- **Mejor integración**: TypeScript se integra fácilmente con herramientas de desarrollo y librerías populares.

### 2. Pre-requisitos (Node, npm, Git)
#### Introducción:
Antes de comenzar, asegúrate de tener instalados Node.js, npm (Node Package Manager) y Git en tu sistema.

#### Ejemplo:
```bash
# Verificar versiones
node -v
npm -v
git --version
```

#### Caso de uso:
Estas herramientas son esenciales para la gestión de dependencias, control de versiones y ejecución de proyectos TypeScript.

### 3. Inicialización de proyecto TypeScript

#### Introducción:
Inicializar un proyecto de TypeScript de manera correcta asegura un buen punto de partida para el desarrollo. Recordemos que al typescript ser un lenguaje transpilado, necesitamos configurar nuestro proyecto para que pueda ser compilado a JavaScript. En proyectos JavaScript tradicionales, solamente con el comando node index.js es suficiente para ejecutar nuestro código, pero en proyectos TypeScript, necesitamos compilar nuestro código a JavaScript antes de ejecutarlo.

#### Ejemplo de iniciacion de proyecto:
```bash
# Inicializar un nuevo proyecto
npm init -y
npm install typescript --save-dev
npx tsc --init
nano index.ts
```

#### Exploremos los comandos utilizados:

- `npm init -y`: Inicializa un nuevo proyecto de Node.js con la configuración predeterminada. Hasta este punto chicos, lo hemos usado tantas veces que ya es parte de nuestra vida.
- `npm install typescript --save-dev`: Instala TypeScript como una dependencia de desarrollo en el proyecto. Esto nos permitirá compilar nuestro código TypeScript a JavaScript. A este punto, puedes estarte preguntando, cual es la diferencia entre -D y --save-dev, pues la respuesta es que son lo mismo, solo que -D es una forma abreviada de --save-dev.
- `npx tsc --init`: Entendamos este comando como el que nos permitirá configurar nuestro proyecto de TypeScript. Al ejecutarlo, se creará un archivo `tsconfig.json` con la configuración inicial.
- ***Explicación del archivo tsconfig.json***: Este archivo de configuración contiene las opciones y ajustes para el compilador de TypeScript. Es un archivo json común que se puede editar manualmente para personalizar la configuración global del proyecto en lo que respecta a TypeScript. Te recomiendo leer el siguiente documento de [referencia](tsconfig_explicado.md) para entender mejor cada una de las opciones.
