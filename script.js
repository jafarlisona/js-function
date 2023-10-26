// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.Example [12,32,44,56,45] = >45 =>4-cu indeksdir.
// const arr = [10, 23, 35, 74, 21, 18, 45, 89, 56, 32];
// function findIndex(arr) {
//     let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 45) {
//       index = i;
//     }
//   }
//   return index;
// }
// console.log(findIndex(arr));

// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin. Example: const arr =  [3,2,1,4,3,1,5,6,9,3,2,52,3,2]   let num = 3   ->     4  tekrar
// const arr = [3, 2, 1, 4, 3, 1, 5, 6, 9, 3, 2, 52, 3, 2];
// function findCount(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i]===3)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(findCount(arr));
// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.  Example :  [2,1,3,4,6]     -> 9
// const arr = [10, 23, 35, 74, 21, 18, 45, 89, 56, 32];
// function findElements(arr) {
//   if ((arr.length < 3)) {
//     return 0;
//   }
//   let smallest = arr[0];
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== smallest && arr[i] !== largest) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(findElements(arr));

// 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function. (misalcun daxil edilen eded 475 olarsa, geriye 547 qaytarsin)
// let num = "475";
// function reverseNum(num) {
//   let lastDigit = num[num.length - 1];
//   let newNum = lastDigit + num[num.length - 3]+ num[num.length-2];

//   return parseInt(newNum);
// }
// console.log(reverseNum(num));
