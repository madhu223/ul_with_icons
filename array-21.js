

// Converting Array to newarray that contains only numbers
var array1 = [1,2,'uma',3,4,5];   
//var array1 = [1,2,3,'uma',{'a':'ma'},4,5];

var newarray1 = [];

array1.map(arr);
console.log(arr());
function arr(j) {
    if (!isNaN(parseInt(j))){
        newarray1.push(parseInt(j))
    }
    return newarray1;
}


console.log(newarray1);

   function arraySum() {

    var i =0;
    var sum = 0;
    for( var i=0; i < newarray1.length; i++) {
        
        sum += newarray1[i];
    }
    return sum;      
}

    console.log(arraySum())
 
