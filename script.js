let arr = ['123450', '234900', '4329788', '234234432', '543345645', '54887298', '1234515341'];
let arr1 = [];

for (let i = 0; i < arr.length; i++) {

    console.log(arr[i].substring(0,1));
    if (arr[i].substring(0,1) === '2' || arr[i].substring(0,1) === '4') {

        arr1.push(arr[i]);

    }
}
console.log(arr1);


let n = 100;

for (let i = 1; i <= n; i++) {

    let marker = 0; 

    if (i === 1) {
        console.log(i, ' Делителем этого числа является: 1');
        continue;
        
    }
    else if (i === 2){
        console.log(i, ` Делители этого числа: 1 и ${i}`);
        continue;
    } 
    else {
        for (let j = i-1; j > 1 && marker === 0; j--) {
            if (i % j === 0) {
                marker = 1;
            }
            
        }
    } 
    if (marker === 0) {
        console.log(i, ` Делители этого числа: 1 и ${i}`);
    }

}


