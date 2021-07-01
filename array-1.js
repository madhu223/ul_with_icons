
//var array1 = [1,2,3,4,5];
var array1 =[1,2,3,4,5,6,7,8,9,10];

console.log(array1);

   function arraySum() {

    var i =0;
    var sum = 0;
    for( var i=0; i < array1.length; i++) {
        
        sum += array1[i];
    }
    return sum;      
}

    console.log(arraySum())
 
