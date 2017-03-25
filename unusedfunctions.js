var b = 0;
var c = 0;
function phone(a) {
a = prompt("Price of phone");
b = Number(b) + Number(a);
c = c + 1;
console.log("Phone number " + c + ": $" + a);
}

function taxes(){
    tax = Number(0.08);
    taxAmount = Number(b) * Number(tax);
    totalPrice = Number(b) + Number(taxAmount);
    console.log("Tax: $" + tax)
    console.log("Total Tax due: $" + taxAmount);
    console.log("Total Amount due: $" + totalPrice)
}