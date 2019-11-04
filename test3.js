var n = 4
for (i = 1; i <= n; i++) {
    str = "";
    for (j = i; j < 10; j++) {
        str += " ";
    }
    for (k = 0; k < (i * 2) - 1; k++) {
        str += "*";
    }
    console.log(str);
}
var str = "";
for (i = n - 1; i >= 1; i--) {
    str = "";
    for (j = i; j < 10; j++) {
        str += " ";
    }
    for (k = 0; k < (i * 2) - 1; k++) {
        str += "*";
    }
    console.log(str);
}