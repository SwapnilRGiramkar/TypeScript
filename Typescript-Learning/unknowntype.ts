// unknown type 
let value1: unknown;
value1="Swapnil";
value1 =23;
value1=false;

console.log(value1);

let data:unknown ="typescript";
if(typeof data === "string")
{
    console.log(data.toUpperCase());    
}