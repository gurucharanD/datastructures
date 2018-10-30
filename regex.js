var specialChars = "ab c!@#$^&%*()+guru=-[]\/{}|126:<huj>?,.";


var desired = specialChars.replace(/\s/g, '___').replace(/[^\w\s]/gi, '')
console.log(desired)
