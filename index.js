function findMatching(collection, str){
   const newCollection = [];
   for(let item of collection){
      if(item === str){
         newCollection.push(item);
      }  
      else if(item.toLowerCase() === str.toLowerCase()){
         newCollection.push(item);
      }
   }
  return newCollection;
}

function fuzzyMatch(collection, substr){
   const newCollection = [];
   for(let item of collection){
      const sub = item.slice(0,2);
      if(sub === substr){
         newCollection.push(item);
      }
      
   }
 return newCollection;
}   

function matchName(collection, str){
   let obj = {};
   let newCollection = [];
   
   for (let item of collection){
       if(item.name === str){
          obj = {name: item.name, hometown: item.hometown};
          newCollection.push(obj);
         }
   }
      return newCollection;
}

  


        
