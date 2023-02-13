let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    for (key in obj){
        if (typeof obj[key] === 'string' || obj[key] instanceof String){
            delete obj[key];
        }
    }
    //return obj;
}
//Ojo, la variable obj que se ha modificado ha sido el objeto global. Es posible que los objetos se pasen por referencia.
// Se pasan los objetos por referencia? SI. Y probablemente las arrays también.


removeStringValues(obj);
console.log(obj); // { age: 20 }
