let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(inventory) {
  
  let renderedInventory =[];
  let textFilters = ["black"];

  for (let inventoryIndex = 0; inventoryIndex < inventory.length ; inventoryIndex++){
    renderedInventory = renderedInventory.concat(inventoryByDesignerByTextFilter(inventory[inventoryIndex], textFilters));
  }
  
  return renderedInventory;

}

function inventoryByDesignerByTextFilter(inventoryObject, textFilters=[])
{ 
  let designerFilteredArray =[];
  
  for (let shoeIndex =0; shoeIndex < inventoryObject.shoes.length; shoeIndex++){
    
    const currentShoeText = inventoryObject.shoes[shoeIndex].name.toLowerCase();
    
    textFilters.forEach((element)=>{
      if (currentShoeText.toLowerCase().includes(element))
      {
       //designerFilteredArray=designerFilteredArray.concat(shoeArray(inventoryObject,shoeIndex));
       designerFilteredArray.push(shoeArray(inventoryObject,shoeIndex));  
    }
    })
    
  }

  return designerFilteredArray;
}

function shoeArray (inventoryObject, shoeIndex){
  let shoeArray =[];
  shoeArray.push(inventoryObject.name, inventoryObject.shoes[shoeIndex].name,inventoryObject.shoes[shoeIndex].price);
  return shoeArray;
}

console.log(inventoryByDesignerByTextFilter({
  name: 'Gucci',
  shoes: [
    {name: 'red leather laced sneakers', price: 800},
    {name: 'black leather laced sneakers', price: 900}
  ]
},
[` `]
));

// console.log(shoeArray({
//   name: 'Gucci',
//   shoes: [
//     {name: 'red leather laced sneakers', price: 800},
//     {name: 'black leather laced sneakers', price: 900}
//   ]
// },
// 1));