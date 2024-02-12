// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }   it is a Basic Syntax for loop




for (let i = 2; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number...");
    }
    // console.log(element);
    
}
// console.log(i);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outet Loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and outerloop value ${i}`);
       // console.log( i + '*' + j + ' = ' + i*j);
    }
       
}


let myarray = ["Flash", "Batman", "Superman", "Ironamn"]
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}


// break and continue
for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log(`Detected your fav number 5`);
        continue
    }else if(index == 10){
        console.log(`Detected Multiple of 5 number`);
        break
    }
    
    console.log(`Value of i is ${index}`);
    
}


for (let i = 1; i <= 10; i++) {

    if ( i == 5) {
        console.log("5 Great Number");
    }
    console.log(i);
    
}