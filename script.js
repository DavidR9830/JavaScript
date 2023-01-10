// Calcular el menor entre tres números
function minimo3 (a,b,c) {
    var mim2;
    var min3;

    if (a < b) {
        min2 = a;
    } 
    else {
        min2=b;
    }
    if (min2 < c) {
        min3 = min2;
    }
    else {
        min3 = c;
    }

    return min3;
}

document.write (minimo3(7,4,1));