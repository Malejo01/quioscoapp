export const formatearDinero  = cantidad => {
    return cantidad.toLocaleString('en_US', {
        style:'currency',
        currency: 'USD'
    })
}
