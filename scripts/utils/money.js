export function formatCurrency(priceCents) {
    return (priceCents/100).toFixed(2);
}

export default formatCurrency;
//default keyword used for importing only 1 function 