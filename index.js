function dwarfRollCall(dwarves) {
 // var arr = []
 var a = ""
  for(var i =0; i< dwarves.length; i++){
  // arr.push( i+1 + ". " + dwarves[i] + "")
    a += i+1 + '. ' +  dwarves[i] + " " 
  }
    return a
}

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  for(var i =0; i <planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase()
    arr.push(planeteerCalls[i] + "!")
  }
  return arr
}

function longPlaneteerCalls(words) {
  var arr = []
  for(var i =0; i<words.length; i++){

  if(words[i].length >4){
    return true
  }
  
  else {
    return false
  }
}
}

function findTheCheese (foods) {
  var arr = ["cheddar", "gouda", "camembert"]
  for(var i =0; i<foods.length; i++){
     if(arr.includes(foods[i])){
       return foods[i]
     }
    //"tomato soup", "cheddar", "oyster crackers", "gouda"
  /* if(foods.includes( "cheddar")){
  
       return "cheddar"
   
   
  }
   else  {
   return "no cheese!"
   }*/
 }
}



function wordsThatStartWithB(words){
  var a = ["brian", "bob"]
  for(var i=0; i<words.length; i++){
    if(words[i] == words[i].charAt(0)){
      
    }
  }
}

wordsThatStartWithB(["brian", "bob", "jane"]) // ["brian", "bob" ]
wordsThatStartWithB(["joe", "jill", "bob"]) // ["bob"]
wordsThatStartWithB(["banana", "berry"]) // ["banana", "berry"]