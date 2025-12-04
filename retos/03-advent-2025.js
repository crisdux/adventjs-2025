function drawGift(size, symbol) {
    if (size < 2) return ""
    let base = `${symbol.repeat(size)}`
    let cuerpo = `${symbol}${" ".repeat(size - 2)}${symbol}\n`.repeat(size - 2)
    if (size === 2) cuerpo = ""
    return `${base}\n${cuerpo}${base}`
}

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