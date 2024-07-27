// Functions in js are same as python
     //Arrow Function
// const printName = (name,surname)=>{return name+" "+surname};
// console.log(printName("Pradyumna","Roy"));

// const add = (a,b) => {return a+b}
// console.log(add(3,5));

     //for each function
// arr = [10,20,30,40,50,60,70,80]
// arr.forEach(element => {
//     console.log(element);
// });

     //map function in array 
arr = [10,20,30,40,50,60,70,80];
const newAr = arr.map(val =>{
    return val*val;
});
console.log(newAr);