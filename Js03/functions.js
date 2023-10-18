const a = 3;
const b = 4;
sum(a,b);

const c = 5;
const d = 6;
sum(c,d);

function sum(x,y){
    const sum = x+y;
    console.log("The sum of these twos is : ", sum);
}

const square = function(num) {
    return num*num ;
};
console.log(square(2));

// Nested Functions

function addSq(a,b) {
    const sqOfA = sq(a);
    const sqOfB = sq(b);

    
    function sq(num){
        return num*num;
    }
    return sqOfA + sqOfB;
}


console.log(addSq(2,5));
