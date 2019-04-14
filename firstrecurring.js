let input = [2, 5, 5, 2, 3, 5, 1, 2, 4]
// using set 
// let s = new Set();

// for (const iterator of input) {
//     if (s.has(iterator)) {
//         console.log(iterator)
//         return iterator;
//     } else {
//         s.add(iterator)
//     }
// }

// return undefined




//naive solution

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[i] === input[j] && i !== j) {
            console.log(input[i])
            return input[i]
        }
    }
}