// function printSubsets(set) {
//     let n = set.length;
//     let subs = []
//     for (let i = 0; i < (1 << n); i++) {
//         let res = ''
//         console.log("{ ");
//         for (let j = 0; j < n; j++)
//             if ((1 & (i >> j)) > 0) {
//                 res = res + set[j] + " ";
//             }
//         subs.push(res)
//     }
//     subs.forEach(a => {
//         a.trim().split(' ').join();
//     })
//     console.log(subs)
// }
// printSubsets([5, 15, 3])












// function printSubsets(set) {
//     let n = set.length;
//     let subs=[]
//     for (let i = 0; i < (1 << n); i++) {
//         let res=''
//         console.log("{ ");
//         for (let j = 0; j < n; j++)
//             if ((1 & (i >> j)) > 0) {
//                 console.log(set[j] + " ");
//             }

//         console.log("}");
//     }
// }
// printSubsets([12, 13])