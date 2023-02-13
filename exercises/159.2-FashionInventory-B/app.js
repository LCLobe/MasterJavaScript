let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    let currentInventory =[];

    for (let i=0; i<inventory.length; i++){
        currentInventory=currentInventory.concat(averagePriceByDesigner(inventory[i]));
    }
    return currentInventory;    
}

function averagePriceByDesigner (designerInventoryObject){
  let partialSum =0;

  for (let shoeIndex =0; shoeIndex<designerInventoryObject.shoes.length; shoeIndex++){
    partialSum += designerInventoryObject.shoes[shoeIndex].price;
    //console.log(partialSum);
  }
  const averagePrice = partialSum/designerInventoryObject.shoes.length;
  //console.log(averagePrice);
//Until here it works

  const objectToReturn ={
    name : designerInventoryObject.name,
    averagePrice :averagePrice
  };
  
  return objectToReturn;

}

// console.log(averagePriceByDesigner( {
//   name: 'Brunello Cucinelli',
//   shoes: [
//     { name: 'tasselled black low-top lace-up', price: 1000 },
//     { name: 'tasselled green low-top lace-up', price: 1100 },
//     { name: 'plain beige suede moccasin', price: 950 },
//     { name: 'plain olive suede moccasin', price: 1050 },
//   ],
// }));