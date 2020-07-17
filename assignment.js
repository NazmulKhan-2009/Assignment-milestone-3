//

// Answer of Question:1

function feetToMile(feet){
  let inMile=feet*0.000189394;
  let mile=inMile.toFixed(8)
  return mile
}

console.log(feetToMile(10));



// Answer of Question:2

function  woodCalculator(chair,table,bed){

let woodForChair=chair*1;
let woodForTable=table*3;
let woodForBed=bed*5;
let totalWoodRequire="Total "+(woodForChair+woodForTable+woodForBed)+" Cubic Feet Wood require ";
return totalWoodRequire;

}
console.log(woodCalculator(14,5,12));


// Answer of Question:3

function brickCalculator(floor){
  let brickPerFeet=1000;

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

console.log(brickCalculator(18));


// Answer of Question:4
function tinyFriend(){
  var myFriendName=["Shamim","Sufian","Chisty","Emon","Monir"];
  var minInNumber=Math.min(myFriendName[0].length,myFriendName[1].length,myFriendName[2].length,myFriendName[3].length,myFriendName[4].length)
  
  for(let p=0;p<myFriendName.length;p++){
      if(myFriendName[p].length===minInNumber){
        return(myFriendName[p]);
      }
    }
  }
  
  console.log(tinyFriend());