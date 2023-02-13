let currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
    let currentInventory =[];

    for (let i=0; i<inventory.length; i++){
        currentInventory=currentInventory.concat(inventoryByDesigner(inventory[i]));
    }
    return currentInventory;    
}

function inventoryByDesigner (objectInventoryOfDesigner){
    let arrayOfDesigner = [];
    
    for (let shoeIndex=0; shoeIndex<objectInventoryOfDesigner.shoes.length;shoeIndex++ ){
        arrayOfDesigner.push(arrayOfShoes(objectInventoryOfDesigner, shoeIndex));
    }
    return arrayOfDesigner;
}

function arrayOfShoes(objectInventoryOfDesigner, shoeIndex){
    let arrayOfShoe =[];
    //console.log("arrayOfShoes: ", objectInventoryOfDesigner);
    arrayOfShoe.push(objectInventoryOfDesigner.name,objectInventoryOfDesigner.shoes[shoeIndex].name, objectInventoryOfDesigner.shoes[shoeIndex].price);
    //console.log("arrayOfShoes: ", arrayOfShoe);
    return arrayOfShoe;
}

console.log(renderInventory(currentInventory));

// console.log(arrayOfShoes({
//     name: 'Brunello Cucinelli',
//     shoes: [
//         { name: 'tasselled black low-top lace-up', price: 1000 },
//         { name: 'tasselled green low-top lace-up', price: 1100 },
//         { name: 'plain beige suede moccasin', price: 950 },
//         { name: 'plain olive suede moccasin', price: 1050 }
//     ]
// },1));

// console.log (inventoryByDesigner({
//     name: 'Brunello Cucinelli',
//     shoes: [
//         { name: 'tasselled black low-top lace-up', price: 1000 },
//         { name: 'tasselled green low-top lace-up', price: 1100 },
//         { name: 'plain beige suede moccasin', price: 950 },
//         { name: 'plain olive suede moccasin', price: 1050 }
//     ]
// }));