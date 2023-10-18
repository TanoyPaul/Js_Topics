// for loop :

for (let i = 0; i <= 5; i++){
    console.log("Tanoy",i);
}

// while loop :

let a = 0;
while (a<=5) {
    console.log("a",a);
    a++;
    if(a==2){
        break;
    }
    console.log("a",a);
}

console.log("     ");

let b = 0;

while (b <= 5){

    b ++;
    if (b==3){
        continue;
    }
    console.log("b",b);
   
}

console.log("     ");


// do-while loop :

let t = 1;

do {
    console.log("t",t);
    t++;
}
while (t<4);