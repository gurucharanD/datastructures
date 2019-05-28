var data = [1, 2, 2];
var subsets = []
var array = []

function print_subsets(str, sub, level) {
    if (level == data.length) {
        sub + (data[level])
        subsets.push(sub)
        return;
    }
    print_subsets(str, sub + (data[level]), level + 1);
    print_subsets(str, sub, level + 1);
}
print_subsets(data, array, 0);
console.log(subsets.sort())
for (let i = 1; i < subsets.length; i++) {
    let array = subsets[i].split()
    let res = ''
    for (let j = 0; j < array.length; j++) {
        res = res + array[j] + ' '
    }
    res = res.trim()
    console.log(res)
}