# Hackers dañan sistema de archivos

#### En un mundo donde la información es poder, un hacker conocido como _`Savipo Yatar`_ descubre una serie de archivos en un servidor altamente protegido.

**Estos archivos contienen secretos que podrían cambiar el curso de la historia. Pero hay un problema: algunos de los archivos son falsos, diseñados para engañar a los intrusos. _`Savipo Yatar`_ debe determinar rápidamente cuáles archivos son reales y cuáles son falsos.**

_Cada archivo tiene un nombre con dos partes, separadas por un guion `(-)`. La primera parte es una cadena alfanumérica y la segunda es `unchecksum`, que es una cadena formada por los caracteres que sólo aparecen una vez en la primera parte y en el orden en que aparecen._

Escribe un programa que determine si un archivo es real o falso basado en estas reglas.

## Ejemplos:

- **Nombre del archivo:** `"xyzz33-xy"`

  > **Resultado:** ✅ Real (El checksum es válido)

- **Nombre del archivo:** `"abcca1-ab1"`

  > **Resultado:** ❌ Falso (El checksum debería ser b1, es incorrecto)

- **Nombre del archivo:** `"abbc11-ca"`
  > Resultado: ❌ Falso (El checksum debería ser ac, el orden es incorrecto)

_Cada línea indica el nombre del archivo y su correspondiente **`checksum`**, separados por un guion **`(-)`**._

## Cómo resolverlo

1. Analiza la lista de nombres de archivos y sus checksums que encontrarás en este archivo: [files_quarantine.txt](./data.json)

2. Busca el archivo real número **`33`** _(de todos los archivos reales, el 33º en orden de apareción)_ y envía su checksum con "submit" en la terminal de la plataforma. Por ejemplo si el archivo es xyzz33-xy, harías:
   ```bash
   submit xy
   ```

## Soluciones

| Lenguaje   | Solución                                |
| ---------- | --------------------------------------- |
| Javascript | [solution.js](./javascript/solution.js) |
| Typescript | [solution.ts](./typescript/solution.ts) |
