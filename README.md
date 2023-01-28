# Pasos para iniciar node.js con typescript
## Escribir comando en el CMD de windows
Instalar typescript de manera global con ``` npm i -g typescript```

Iniciar con ``` npm init -y ``` para inicio rapido omitir -y para ingresar nuestros datos


Escribir ``` tsc --init``` para iniciar el tsconfig.json

## En el tsconfig.json modificar los siguientes datos:
```
"target": "es2016",
"module": "commonjs",
"moduleResolution": "node",
"sourceMap": true,
"outDir": "./dist",
"esModuleInterop": true,
"strict": true,
```

## Instalar el slint para ver errores
```
npm install tslint --save-dev
```
Ejecutar ```tsc ``` para compilar de typescript a javascript.

## Instalar typescript como dependencia de desarrollo:
```
npm install typescript --save-dev
```

## Inicializar el tslint.json (en windows) con:
```
npx tslint --init
```

## Ejecutar javascript con:
```
node dist/app.js
```
## Ejecutar typescript con:
```
tsc --watch
```
## Instalar tsc-watch
```
npm install tsc-watch --save-dev
```
## Para ejecutar un unico comando escribir en scripts en el archivo package.json:
```
"dev": "tsc-watch --onSuccess \"node dist/app.js\""
```