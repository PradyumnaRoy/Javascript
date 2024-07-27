        // synchronous
// console.log("One");
// console.log("two");
// console.log("three");
        //   asynchronous
// console.log("One");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//     console.log("Asynchronous"); //time out 
// }, 4000);

// console.log("four");
// console.log("five");
// console.log("six");


            //Callback Hell
function getData(dataId,getNextdata) {
    setTimeout(() => {
        console.log("data ",dataId);
        if(getNextdata) {
            getNextdata();
        }
    }, 2000);
}

//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});