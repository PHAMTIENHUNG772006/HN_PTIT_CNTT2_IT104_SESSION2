let array = [1,2,3,4,5,6];
let arrayList = array.filter(element => element % 2 === 0);

let sumArray = arrayList.reduce((sum, num) => sum + num, 0);

for (let itemp of array) {
    console.log(itemp);
}
console.log(sumArray);



