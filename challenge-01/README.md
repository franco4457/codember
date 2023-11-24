# El reto

### Un espía está enviando mensajes encriptados.

**_Tu misión es crear un programa que nos ayude a buscar patrones..._**

Los mensajes son palabras separadas por espacios como este:
_gato perro perro coche Gato peRRo sol_

**_Necesitamos que el programa nos devuelva el número de veces que aparece cada palabra en el mensaje, independientemente de si está en mayúsculas o minúsculas._**

El resultado será una cadena de texto con la palabra y el número de veces que aparece en el mensaje, con este formato:
**gato2perro3coche1sol1**

> ¡Las palabras son ordenadas por su primera aparición en el mensaje!

## Más ejemplos:

- **llaveS casa CASA casa llaves** -> _`llaves2casa3`_
- **taza ta za taza** -> _`taza2ta1za1`_
- **casas casa casasas** -> _`casas1casa1casas1`_

## Cómo resolverlo

1.  Resuelve el mensaje que encontrarás en este archivo: [mensaje.txt](./data.json)

2.  Envía tu solución con el comando "submit" en la terminal de la plataforma, por ejemplo así:
    submit perro3gato3coche1sol1

## Soluciones

|  Lenguaje  |             Solución              |
| :--------: | :-------------------------------: |
| JavaScript | [Solución](./javascript/index.js) |
| TypeScript | [Solución](./typescript/index.ts) |
