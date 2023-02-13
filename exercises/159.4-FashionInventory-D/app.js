let inventory = [
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

function getLaceNameDataForShoes(inventory) {
    // your code here

    let renderedInventory =[];
  let textFilters = ["lace"]; //lace is contained in laced, therefore they are the same.

  for (let inventoryIndex = 0; inventoryIndex < inventory.length ; inventoryIndex++){
    renderedInventory = renderedInventory.concat(inventoryByDesignerByTextFilterIndicatedWords(inventory[inventoryIndex], textFilters));
  }
  
  return renderedInventory;

}

function shoeObjectWithWordsAndFoundIndex (shoeArray,textFilter)
{
  let shoeObjectMatches ={
    nameWords : shoeArray[1].toLowerCase().split(" "),
    targetWordIndex : -1
  };
  //let wordsArray = shoeArray[1].toLowerCase().split("");

  // shoeObjectMatches.nameWords.forEach((element)=>{
  //   if (element.includes(textFilter)){
  //     if (shoeObjectMatches.targetWordIndex === -1) shoeObjectMatches.targetWordIndex
  //   }
  // })

  for (let wordIndex = 0; wordIndex < shoeObjectMatches.nameWords.length ; wordIndex++){
    if (shoeObjectMatches.nameWords[wordIndex].includes(textFilter)){
      if (shoeObjectMatches.targetWordIndex === -1) shoeObjectMatches.targetWordIndex = wordIndex;
      //else (shoeObjectMatches.targetWordIndex = String.toString(targetWordIndex)+`-`+Number.toString(wordIndex); )
    }
  }

  return shoeObjectMatches;

}

function inventoryByDesignerByTextFilterIndicatedWords(inventoryObject, textFilters=[])
{ 
  let designerFilteredArray =[];
  let tempShoe =[];
  
  for (let shoeIndex =0; shoeIndex < inventoryObject.shoes.length; shoeIndex++){
    
    const currentShoeText = inventoryObject.shoes[shoeIndex].name.toLowerCase();
    
    textFilters.forEach((element)=>{
      if (currentShoeText.toLowerCase().includes(element))
      {
        //designerFilteredArray.push(shoeArray(inventoryObject,shoeIndex));  
        tempShoe = shoeArray(inventoryObject,shoeIndex);
        designerFilteredArray.push(shoeObjectWithWordsAndFoundIndex(tempShoe,element));
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

//console.log(shoeObjectWithWordsAndFoundIndex(["Gucci","black leather laced sneakers",900],"lace"));
console.log(getLaceNameDataForShoes(inventory));