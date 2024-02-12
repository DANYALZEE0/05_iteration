// for of

// ["", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World"
 for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('Us', "America")
map.set('En', "England")
map.set('In', "India")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':--', value);
    
}

const myObj = {
    game1: 'NFS',
    game2: 'GT5'
}

// for (const [key, values] of myObj) {
//     console.log(key, '---', values);
// }



const array = ["Zee", "Shan", "Patel"]
for (const Name of array) {
    console.log(Name);
}