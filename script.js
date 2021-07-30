let num = 266219;
let total = 1;
while(num > 0) {
    total *= num % 10;
    num = Math.floor(num / 10);
}
console.log(total);

total = total ** 3;
console.log(String(total).slice(0,2));