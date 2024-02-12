const myNums = [1,2,3]

// const mytotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval:  ${currval} `);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0 )

console.log(myTotal);


const shoppingCart = [

        {
           itemName: "js course",
           price: 2999 
        },

        {
           itemName: "python course",
           price: 999 
        },

        {
           itemName: "Java Course",
           price: 4000
        },
        {
           itemName: "Data Science Course",
           price: 12999
        }

]

const addingMoney = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(addingMoney);