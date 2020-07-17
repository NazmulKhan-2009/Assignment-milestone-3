// Answer of Question:1

function feetToMile(feet){

  if(feet<=0 || feet ==='' || feet==null){
    alert("You have to input a positive number")
  }
  else{
    let inMile=feet*0.000189394;
    let mile=inMile.toFixed(8)
    return feet +" feet is "+ mile +" mile"
  }    
}
let output=feetToMile(1)
console.log(output);

// Answer of Question:2

function  woodCalculator(chair,table,bed){
    // wood per unit
    let cubicFtPerChair=1;
    let cubicFtPerTable=3;
    let cubicFtPerBed=5;

    // wood require per item
    let woodForChair=chair*cubicFtPerChair;
    let woodForTable=table*cubicFtPerTable;
    let woodForBed=bed*cubicFtPerBed;

if(chair<=0 || table<=0 || bed<=0){
    alert('You have to input a positive number')
}else{
    let totalWoodRequire="Total "+(woodForChair+woodForTable+woodForBed)+" Cubic Feet Wood require ";
  return totalWoodRequire;
}
}
let result=woodCalculator(1,1,1)
console.log(result);


// Answer of Question:3

function brickCalculator(floor){
    let brickPerFeet=1000;

if(floor==null || floor<=0 ){
    alert("Please input the field in positive number")
}else{
  if(floor<=10){
    let eachFloorFeet=15;
    let totalFeet=eachFloorFeet*floor;
    let totalBrickRequire=totalFeet*brickPerFeet
    return  totalBrickRequire +" Bricks require for "+floor+" floor"       
}else if(floor<=20 && floor>=11){
    let eachFloorFeet=12;
    let totalFeet=eachFloorFeet*floor;
    let totalBrickRequire=totalFeet*brickPerFeet
    return totalBrickRequire +" Bricks require for "+floor+" floor" 
}else{
    let eachFloorFeet=10;
    let totalFeet=eachFloorFeet*floor;
    let totalBrickRequire=totalFeet*brickPerFeet
    return totalBrickRequire +" Bricks require for "+floor+" floor" 
}
}
}
let bricksRequire=brickCalculator(1)
console.log(bricksRequire);


// Answer of Question:4
function tinyFriend(names) {
  
  let namesLength = Infinity;
  let shortName = "";
  if(names.length===0){
      alert("Input the Names")     
    }else{
    if (names.length > 0) {
      for (let f = 0; f < names.length; f++) {
          if (typeof names[f] === 'string' && names[f].length < namesLength) {
              shortName = names[f];
              namesLength = names[f].length;
          }
      }
  }

      return "My tiny friend by name is "+ shortName;

  }
}

let tinyName = tinyFriend(["Shamim","Chisty","Rezowan","Khan","Monirul","Ragib"]);
console.log(tinyName);