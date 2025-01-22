const myNums = [1,2,3]

// const myTotal =  myNums.reduce( function (acc, curValue) {
//     console.log(`acc: ${acc} and Currvel : ${curValue}`);
//     return acc + curValue
// }, 0 )


const myTotal = myNums.reduce ( (acc, curr) => acc + curr, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile Development",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
