let obj1 = {
    a: 1,
    b: 2
};o
let obj2 = {
    b: 4,
    c: 3
};

function extend(objectToExtend, objectSource) {
    // your code here
    //object.assign(target, source) no sirve porque machaca la propiedad
    //Create an array with all properties of obj1
    //create an array with all properties of obj2
    //for each property in array of obj2, check if the property exists in array 1, if not, add it.

    const keysObjectToExtend=Object.keys(objectToExtend);

    for (key in objectSource){
        
        if (!keysObjectToExtend.includes(key)){objectToExtend[key]=objectSource[key];}
    }
    console.log(objectToExtend);

}
//---------
function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)) {
     result = result.concat(
         Object.getOwnPropertyNames(objectToInspect)
     );
 }

     return result;
}

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
//console.log(listAllProperties(obj1));
//console.log(obj1.keys(o));
//console.log(showProps(obj2,"obj2"));
//console.log(showProps(obj2,obj2.toString()));
//console.log(object.keys(obj1));
extend(obj1, obj2);