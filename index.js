

let today = new Date(new Date().getTime() + -(new Date().getTimezoneOffset()/60) * 3600 * 1000);
let stringDate = today.toISOString().split('T')[0]

console.log(stringDate);

process.exit(1);
