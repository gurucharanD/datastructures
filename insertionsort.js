let a = [3, 4, 1, 8, 5, 2, 9, 0, 6, 7]

// for (let i = 0; i < a.length; i++) {
//     if (a[i] < a[0]) {
//         a.unshift(a.splice(i, 1)[0])
//     } else {
//         for (let j = 1; j < i; j++) {
//             if (a[i] > a[j - 1] && a[i] < a[j]) {
//                 a.splice(j, 0, a.splice(i, 1)[0])
//             }
//         }
//     }
//     console.log(a)
// }

// console.log(a)
// let a = [3, 4, 1, 8, 5, 2, 9, 0, 6, 7]


for (let i = 1; i < a.length; i++) {
    let key = a[i]
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j]
        j = j - 1
        // this loop shifts all the elements to right to create position for unsorted element
    }
    a[j + 1] = key;
    console.log(a)
    //this inserts unsorted element into its correct position
}
console.log(a)