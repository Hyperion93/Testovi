let n = 3;
let k = 4;
let kon2 = 0
let rez1 = 0;
let rez2 = 0;
let kon = 0;
for (let i = 1; i <= n; i++) {

    rez1 += i;
}
for (let c = 0; c <= n; c++) {

    rez2 += k + c;

}
kon += rez1 / rez2;
kon2 = kon + (n + 1) / (k + n);

console.log(kon2);

//7

