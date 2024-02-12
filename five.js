// for each

const coding = ["js", "ruby", "java", "python","cpp"]
// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach( (item, index, arr, val)=>{
    //console.log(item, index, arr, val);
} )

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

