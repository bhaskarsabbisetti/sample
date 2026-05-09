let a=10;
var b=20;
const c=30;

function hello(){
    document.getElementById("name").innerText="my name is bhaskar";
    document.getElementById("let").innerText=a;
    document.getElementById("var").innerText=b;
    document.getElementById("const").innerText=c;

    
}
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
i *= 2;                     // increment to avoid infinite loop
document.write(i + ", ");   // output
}
var str = '{"names":[' +                    // crate JSON object
'{"first":"Hakuna","lastN":"Matata" },' +
'{"first":"Jane","lastN":"Doe" },' +
'{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str);                      // parse
document.write(obj.names[1].first); 