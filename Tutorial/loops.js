arr = [10,20,30,40,50,60,70,80,90]
for(let i in arr) {
    console.log(arr[i])
}
// for(let i of arr) {
//     console.log(i)
// }
// for(let i = 0;i < arr.length;i++) {
//     console.log(arr[i])
// }


console.log(arr.slice(1,4))
console.log(arr)

    // to replace element
arr.splice(2,2,300,400)
console.log(arr)

    // to delete element
arr.splice(2,1)
console.log(arr)

    // to add element
arr.splice(2,0,30)
console.log(arr)