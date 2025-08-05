let products = [
    {name : "A", price: 100, discount: 0.1, quantity: 2},
    {name : "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: {minQuantity: 2, extraDiscount: 0.05}},
    {name : "C", price: 300, discount: 0, quantity: 3, bulkDiscount: {minQuantity: 3, extraDiscount: 0.1}}
]

let getOrderSummary = (products) =>{
    let totalDiscountBefore = 0;
    let totalDiscountAfter = 0;
    const detail = [];

    for(let product of products){
        let temp = product.price * product.quantity;
        totalDiscountBefore += temp;
        let extraDiscount = 0;
        if(product.bulkDiscount){
            if(product.quantity >= product.bulkDiscount.minQuantity) extraDiscount = product.bulkDiscount.extraDiscount;
        }
        let priceFinal = Math.round(product.price * (1-product.discount - extraDiscount));
        let subTotal = priceFinal * product.quantity;
        totalDiscountAfter += subTotal
        detail.push({name : product.name,priceFinal : priceFinal, quantity : product.quantity,subTotal : subTotal})
    }
    return {
        totalDiscountAfter,
        totalDiscountBefore,
        detail
    }
}
console.log(getOrderSummary(products));
