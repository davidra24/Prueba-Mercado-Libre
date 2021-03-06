/**
 * 
 * @param {Number} amount Cantidad númerica a transformar
 * @param {String} currency Tipo de moneda utilizada en la conversión
 * @returns Cambia el formato numerico a uno de moneda
 */
export const useCurrencyFormat = (amount, currency) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
      })
    let price = formatter.format(amount)
    if(amount < 10000 && amount > 999 ) {
      price = `${price.slice(0, 3)}.${price.slice(3, price.length)}`
    }
    return price
}

/**
 * 
 * @param {String} condition condición traída deade API en inglés
 * @returns Transforma la condición del producto del API a español
 */
 export const translateCondition = (condition) => 
 condition === 'new' ? 'Nuevo' : condition === 'used' ? 'Usado' : condition === '' ? '' : 'Reacondicionado'