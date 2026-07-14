let roll:number[]=[1,2,3,4,5,6,7,8,9,10];
console.log(roll.includes(5)); //true
console.log(roll.includes(15)); //false

let colors:string[]=["red","blue","yelw","black","violet"];
console.log(colors.includes("orange"));
if(colors.includes("blue"))
{
    console.log("Color is present in the array");
}
else
{
    console.log("Color is not present in the array");
}