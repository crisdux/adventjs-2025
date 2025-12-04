# Advent.js 2025 🎅

## Advent.js 2025🎅🏼| Reto #1: Filtrar los regalos defectuosos

Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter `#`.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.

Ejemplos
```js
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []
```

---

## Advent.js 2025🎅🏼| Reto #2: Fabrica los juguetes

La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
Cada línea indica qué juguete hay que fabricar y cuántas unidades.

Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

Tienes una lista de objetos con esta forma:

* `toy`: el nombre del juguete (`string`)
* `quantity`: cuántas unidades hay que fabricar (`number`)
Tu tarea es escribir una función que reciba esta lista y devuelva un **array de strings** con:

Cada juguete repetido tantas veces como indique `quantity`
En el mismo orden en el que aparecen en la lista original
Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
🧩 Ejemplos

```js
const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []
```

---

## Advent.js 2025🎅🏼| Reto #3: Salvando al becario

En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

* `size`: el tamaño del regalo cuadrado
* `symbol`: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)

El regalo debe cumplir:

Debe ser un cuadrado de `size x size`.

El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".

Si `size < 2`, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea `\n`.

Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

🧩 Ejemplos

```js
const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…
```