export function priceFormat(price) {
    return (
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price / 100)
    )
}